"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useForm, useWatch } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import {
  getCheckLoanModuleAPI,
  getMapLoanDepositProductDataAPI,
  getMapLoanProductAPI,
  postMapLoanProductAPI,
} from "./MapLoanProductApis";
import {
  getDepositProductData,
  getDurationUnitData,
  getGraceOnData,
  getOverdueOnData,
  getRepayTypeData,
} from "./MapLoanProductReducers";

export const useMapLoanProduct = () => {
  const dispatch = useDispatch();

  //loader
  const [loading, setLoading] = useState(false);
  const [disableForm, setDisableForm] = useState(true);
  const [disableFormMessage, setDisableFormMessage] = useState("");

  // map loan product schema
  const formSchema = yup.object({
    orgId: yup.string().required("Organisation is required"),
    productId: yup.string().required("Product is required"),
    productName: yup.string().required("Product name is required"),
    repaymentType: yup.string().required("Repayment type is required"),
    minAmount: yup.number().required("Minimum amount is required"),
    maxAmount: yup.number().required("Maximum amount is required"),
    minDuration: yup.number().required("Minimum duration is required"),
    maxDuration: yup.number().required("Maximum duration is required"),
    durationUnit: yup.string().required("Duration unit is required"),
    rateOfInterest: yup.number().required("Rate of intereset is required"),
    isOverdue: yup.boolean(),
    overdueOn: yup
      .string()
      .test(
        "is-required-when-overdue",
        "Overdue on is required",
        function (value) {
          const { isOverdue } = this.parent;
          if (isOverdue) {
            return !!value;
          }
          return true;
        }
      ),
    defaultCountOnOverdue: yup
      .number()
      .test(
        "is-required-when-overdue",
        "Default overdue must be greater than 0",
        function (value) {
          const { isOverdue } = this.parent;
          if (isOverdue) {
            return value > 0;
          }
          return true;
        }
      ),
    overdueRate: yup
      .number()
      .test(
        "is-required-when-overdue",
        "Overdue rate must be greater than 0",
        function (value) {
          const { isOverdue } = this.parent;
          if (isOverdue) {
            return value > 0;
          }
          return true;
        }
      ),
    graceDays: yup.number().required("Grace days is required"),
    graceOn: yup.string().required("Grace on is required"),
    isNpa: yup.boolean(),
    npaTreatAfter: yup
      .number()
      .test(
        "is-required-when-npa",
        "NPA treat after must be greater than 0",
        function (value) {
          const { isNpa } = this.parent;
          if (isNpa) {
            return value > 0;
          }
          return true;
        }
      ),
    isShareDeduct: yup.boolean(),
    sharePercent: yup
      .number()
      .test(
        "is-required-when-share-deduct",
        "Share percent must be greater than 0",
        function (value) {
          const { isShareDeduct } = this.parent;
          if (isShareDeduct) {
            return value > 0;
          }
          return true;
        }
      ),
    isDepositDeduct: yup.boolean(),
    linkDepositProduct: yup
      .string()
      .test(
        "is-required-when-deposit-deduct",
        "Deposit product is required",
        function (value) {
          const { isDepositDeduct } = this.parent;
          if (isDepositDeduct) {
            return !!value;
          }
          return true;
        }
      ),
    depositPercent: yup
      .number()
      .test(
        "is-required-when-deposit-deduct",
        "Deposit percent must be greater than 0",
        function (value) {
          const { isDepositDeduct } = this.parent;
          if (isDepositDeduct) {
            return value > 0;
          }
          return true;
        }
      ),
    misNature: yup.string().required("Mis nature is required"),
    misAmount: yup.number().required("Mis amount is required"),
    secureDepositProduct: yup.string(),
    maxAllow: yup
      .number()
      .nullable() // Allows maxAllow to be null when not required
      .test(
        "is-valid-range",
        "Max allow must be between 20 and 100 when Secure deposit product is not empty",
        function (value) {
          const { secureDepositProduct } = this.parent;
          if (secureDepositProduct && secureDepositProduct.length > 0) {
            // maxAllow is required and must be in the range of 20-100
            return value !== undefined && value >= 20 && value <= 100;
          }
          // If secureDepositProduct is empty, maxAllow is not required
          return true;
        }
      ),
  });

  // loan product form
  const mapLoanProductForm = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      orgId: "",
      productId: "",
      productName: "",
      repaymentType: "",
      minAmount: 0,
      maxAmount: 0,
      minDuration: 0,
      maxDuration: 0,
      durationUnit: "",
      rateOfInterest: 0,
      isOverdue: false,
      overdueOn: "",
      defaultCountOnOverdue: 0,
      overdueRate: 0,
      graceDays: 0,
      graceOn: "",
      isNpa: false,
      npaTreatAfter: 0,
      isShareDeduct: false,
      sharePercent: 0,
      isDepositDeduct: false,
      linkDepositProduct: "",
      depositPercent: 0,
      misNature: "fixed",
      misAmount: 0,
      secureDepositProduct: "",
      maxAllow: 0,
    },
  });

  const { control } = mapLoanProductForm;

  const { orgId, isOverdue, isNpa, isShareDeduct, isDepositDeduct } = useWatch({
    control,
  });

  // org form handler
  const handleSubmit = (values) => {
    let data = {
      org_id: values.orgId,
      prod_id: values.productId,
      loan_type: values.repaymentType,
      prod_name: values.productName,
      min_amt: values.minAmount,
      max_amt: values.maxAmount,
      min_dur: values.minDuration,
      max_dur: values.maxDuration,
      dur_unit: values.durationUnit,
      roi: values.rateOfInterest,
      is_overdue: values.isOverdue,
      overdue_on: values.isOverdue ? values.overdueOn : 0,
      overdue_count: values.isOverdue ? values.defaultCountOnOverdue : 0,
      overdue_rate: values.isOverdue ? values.overdueRate : 0,
      grace_days: values.graceDays,
      grace_on: values.graceOn,
      is_npa: values.isNpa,
      npa_after: values.isNpa ? values.npaTreatAfter : 0,
      is_share_ded: values.isShareDeduct,
      share_perc: values.isShareDeduct ? values.sharePercent : 0,
      is_deposit_ded: values.isDepositDeduct,
      deposit_perc: values.isDepositDeduct ? values.depositPercent : 0,
      deposit_prod: values.isDepositDeduct ? values.linkDepositProduct : null,
      mis_nature: values.misNature === "fixed" ? 0 : 1,
      mis_amt: values.misAmount,
      sec_prod_id: values.secureDepositProduct
        ? values.secureDepositProduct
        : null,
      max_allow: values.maxAllow,
    };
    postMapLoanProductApiCall(data);
  };

  // get org type data
  const getCheckLoanModuleApiCall = async (id) => {
    try {
      const res = await getCheckLoanModuleAPI(id);
      if (res.message === "Error Found") {
        setDisableForm(true);
        setDisableFormMessage(res.details);
      } else {
        setDisableForm(false);
        setDisableFormMessage("");
        getMapLoanDepositProductDataApiCall(id);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  // get repay type api call
  const getRepayTypeDataApiCall = async () => {
    try {
      const res = await getMapLoanProductAPI("REPAYTYPE");
      if (res.message === "Data Found") {
        dispatch(getRepayTypeData(res.details));
      } else {
        dispatch(getRepayTypeData([]));
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      dispatch(getRepayTypeData([]));
    }
  };

  // get duration unit api call
  const getDurationUnitDataApiCall = async () => {
    try {
      const res = await getMapLoanProductAPI("DURATIONUNIT");
      if (res.message === "Data Found") {
        dispatch(getDurationUnitData(res.details));
      } else {
        dispatch(getDurationUnitData([]));
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      dispatch(getDurationUnitData([]));
    }
  };

  // get overdue on api call
  const getOverdueOnDataApiCall = async () => {
    try {
      const res = await getMapLoanProductAPI("OVERDUEON");
      if (res.message === "Data Found") {
        dispatch(getOverdueOnData(res.details));
      } else {
        dispatch(getOverdueOnData([]));
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      dispatch(getOverdueOnData([]));
    }
  };

  // get grace on api call
  const getGraceOnDataApiCall = async () => {
    try {
      const res = await getMapLoanProductAPI("GRACEON");
      if (res.message === "Data Found") {
        dispatch(getGraceOnData(res.details));
      } else {
        dispatch(getGraceOnData([]));
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      dispatch(getGraceOnData([]));
    }
  };

  // get deposit api call
  const getMapLoanDepositProductDataApiCall = async (id) => {
    try {
      const res = await getMapLoanDepositProductDataAPI(id);
      if (res.message === "Data Found") {
        dispatch(getDepositProductData(res.details));
      } else {
        dispatch(getDepositProductData([]));
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      dispatch(getDepositProductData([]));
    }
  };

  // post map loan product
  const postMapLoanProductApiCall = async (data) => {
    setLoading(true);
    try {
      const res = await postMapLoanProductAPI(data);
      if (res.message === "Success") {
        toast.success(res.details);
        mapLoanProductForm.reset();
      } else toast.error(res.details);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (orgId.length > 0) getCheckLoanModuleApiCall(orgId);
  }, [orgId]);

  return {
    getRepayTypeDataApiCall,
    getDurationUnitDataApiCall,
    getOverdueOnDataApiCall,
    getGraceOnDataApiCall,
    loading,
    mapLoanProductForm,
    handleSubmit,
    disableForm,
    disableFormMessage,
    isOverdue,
    isNpa,
    isShareDeduct,
    isDepositDeduct,
  };
};
