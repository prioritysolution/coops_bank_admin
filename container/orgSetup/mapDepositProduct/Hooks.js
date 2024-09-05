"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useForm, useWatch } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import {
  getCheckDepositModuleAPI,
  getMapDepositProductAPI,
  postMapDepositProductAPI,
} from "./MapDepositProductApis";
import {
  getDurationUnitData,
  getFineOnData,
  getInttTypeData,
} from "./MapDepositProductReducers";

export const useMapDepositProduct = () => {
  const dispatch = useDispatch();

  //loader
  const [loading, setLoading] = useState(false);
  const [orgListLoading, setOrgListLoading] = useState(false);
  const [disableForm, setDisableForm] = useState(false);
  const [disableFormMessage, setDisableFormMessage] = useState("");

  // orgForm schema
  const formSchema = yup.object({
    orgId: yup.string().required("Organisation is required"),
    productId: yup.string().required("Product is required"),
    productName: yup.string().required("Product short name is required"),
    interestType: yup.string().required("Interest type is required"),
    minAmount: yup.number().required("Minimum amount is required"),
    maxAmount: yup.number().required("Maximum amount is required"),
    rateOfInterest: yup.number().required("Rate of intereset is required"),
    minDuration: yup.number().required("Minimum duration is required"),
    maxDuration: yup.number().required("Maximum duration is required"),
    durationUnit: yup.string().required("Duration unit is required"),
    lockInPeriod: yup.number().required("Lock in period is required"),
    passbookFees: yup.number().required("Passbook fees is required"),
    installmentFine: yup.number().required("Installment fine is required"),
    fineChargeOn: yup.string().required("Fine charge on is required"),
    inopperativeMonth: yup.number().required("Inoperative month is required"),
    dormatMonth: yup.number().required("Dormat month is required"),
  });

  // org form
  const mapDepositProductForm = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      orgId: "",
      productId: "",
      productName: "",
      interestType: "",
      minAmount: 0,
      maxAmount: 0,
      rateOfInterest: 0,
      minDuration: 0,
      maxDuration: 0,
      durationUnit: "",
      lockInPeriod: 0,
      passbookFees: 0,
      installmentFine: 0,
      fineChargeOn: "",
      inopperativeMonth: 0,
      dormatMonth: 0,
    },
  });

  const { control } = mapDepositProductForm;

  const orgId = useWatch({
    control,
    name: "orgId",
  });

  // org form handler
  const handleSubmit = (values) => {
    let data = {
      org_id: values.orgId,
      prod_id: values.productId,
      product_name: values.productName,
      interest_type: values.interestType,
      min_amt: values.minAmount,
      max_amt: values.maxAmount,
      roi: values.rateOfInterest,
      min_dur: values.minDuration,
      max_dur: values.maxDuration,
      dur_unit: values.durationUnit,
      lock_days: values.lockInPeriod,
      pass_fees: values.passbookFees,
      default_fine: values.installmentFine,
      fine_on: values.fineChargeOn,
      inoperative_month: values.inopperativeMonth,
      dormat_month: values.dormatMonth,
    };
    // console.log(data);
    postMapDepositProductApiCall(data);
  };

  // get org type data
  const getCheckDepositModuleApiCall = async (id) => {
    try {
      const res = await getCheckDepositModuleAPI(id);
      if (res.message === "Error Found") {
        setDisableForm(true);
        setDisableFormMessage(res.details);
      } else {
        setDisableForm(false);
        setDisableFormMessage("");
      }
      console.log(res);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      // dispatch(getOrgType([]));
    }
  };

  // get intt type api call
  const getInttTypeDataApiCall = async () => {
    try {
      const res = await getMapDepositProductAPI("INTTTYPE");
      if (res.message === "Data Found") {
        dispatch(getInttTypeData(res.details));
      } else {
        dispatch(getInttTypeData([]));
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      dispatch(getInttTypeData([]));
    }
  };

  // get duration unit api call
  const getDurationUnitDataApiCall = async () => {
    try {
      const res = await getMapDepositProductAPI("DURATIONUNIT");
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

  // get intt type api call
  const getFineOnDataApiCall = async () => {
    try {
      const res = await getMapDepositProductAPI("FINEON");
      if (res.message === "Data Found") {
        dispatch(getFineOnData(res.details));
      } else {
        dispatch(getFineOnData([]));
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      dispatch(getFineOnData([]));
    }
  };

  // post new org
  const postMapDepositProductApiCall = async (data) => {
    setLoading(true);
    try {
      const res = await postMapDepositProductAPI(data);
      if (res.message === "Success") {
        toast.success(res.details);
        mapDepositProductForm.reset();
      } else toast.error(res.details);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (orgId.length > 0) getCheckDepositModuleApiCall(orgId);
  }, [orgId]);

  return {
    getInttTypeDataApiCall,
    getDurationUnitDataApiCall,
    getFineOnDataApiCall,
    loading,
    mapDepositProductForm,
    handleSubmit,
    disableForm,
    disableFormMessage,
  };
};
