"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  getInttGlCrData,
  getInttGlOdData,
  getLoanProductData,
  getLoanProductTypeData,
  getPrincipalGlCrData,
  getPrincipalGlOdData,
  getProvissionGlCrData,
  getProvissionGlOdData,
} from "./LoanProductReducers";
import { getLoanProductDataAPI, postLoanProductAPI } from "./LoanProductApis";

export const useLoanProduct = () => {
  const dispatch = useDispatch();

  //loader
  const [loading, setLoading] = useState(false);

  // open dialouge
  const [openDialouge, setOpenDialouge] = useState(false);

  // loan product formm schema
  const formSchema = yup.object({
    name: yup.string().required("Product name is required"),
    productType: yup.string().required("Product type is reuired"),
    principalGlCr: yup.string().required("Principal gl (cr) is reuired"),
    principalGlOd: yup.string().required("Principal gl (od) reuired"),
    interestGlCr: yup.string().required("Interest gl (cr) is reuired"),
    interestGlOd: yup.string().required("Interest gl (od) is reuired"),
    provissionGlCr: yup.string().required("Provision gl (cr) is reuired"),
    provissionGlOd: yup.string().required("Provision gl (od) is reuired"),
  });

  // loan product form
  const loanProductForm = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: "",
      productType: "",
      principalGlCr: "",
      principalGlOd: "",
      interestGlCr: "",
      interestGlOd: "",
      provissionGlCr: "",
      provissionGlOd: "",
    },
  });

  // assign module handler
  const handleSubmit = (values) => {
    let data = {
      product_name: values.name,
      prod_type: values.productType,
      prn_curr: values.principalGlCr,
      prn_od: values.principalGlOd,
      intt_curr: values.interestGlCr,
      intt_od: values.interestGlOd,
      prov_curr: values.provissionGlCr,
      prov_Od: values.provissionGlOd,
    };
    // console.log(values);
    postLoanProductApiCall(data);
  };

  // get loan product type data api call
  const getLoanProductTypeDataApiCall = async () => {
    try {
      const res = await getLoanProductDataAPI("LOANPRODUCTTYPE");
      if (res.message === "Data Found") {
        dispatch(getLoanProductTypeData(res.details));
      } else {
        dispatch(getLoanProductTypeData([]));
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      dispatch(getLoanProductTypeData([]));
    }
  };

  // get principal gl cr data api call
  const getPrincipalGlCrDataApiCall = async () => {
    try {
      const res = await getLoanProductDataAPI("PRINCIPALGLCR");
      if (res.message === "Data Found") {
        dispatch(getPrincipalGlCrData(res.details));
      } else {
        dispatch(getPrincipalGlCrData([]));
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      dispatch(getPrincipalGlCrData([]));
    }
  };

  // get principal gl od data api call
  const getPrincipalGlOdDataApiCall = async () => {
    try {
      const res = await getLoanProductDataAPI("PRINCIPALGLOD");
      if (res.message === "Data Found") {
        dispatch(getPrincipalGlOdData(res.details));
      } else {
        dispatch(getPrincipalGlOdData([]));
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      dispatch(getPrincipalGlOdData([]));
    }
  };

  // get interest gl cr data api call
  const getInterestGlCrDataApiCall = async () => {
    try {
      const res = await getLoanProductDataAPI("INTTGLCR");
      if (res.message === "Data Found") {
        dispatch(getInttGlCrData(res.details));
      } else {
        dispatch(getInttGlCrData([]));
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      dispatch(getInttGlCrData([]));
    }
  };

  // get interest gl od data api call
  const getInterestGlOdDataApiCall = async () => {
    try {
      const res = await getLoanProductDataAPI("INTTGLOD");
      if (res.message === "Data Found") {
        dispatch(getInttGlOdData(res.details));
      } else {
        dispatch(getInttGlOdData([]));
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      dispatch(getInttGlOdData([]));
    }
  };

  // get provision gl cr data api call
  const getProvissionGlCrDataApiCall = async () => {
    try {
      const res = await getLoanProductDataAPI("PROVISSIONGLCR");
      if (res.message === "Data Found") {
        dispatch(getProvissionGlCrData(res.details));
      } else {
        dispatch(getProvissionGlCrData([]));
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      dispatch(getProvissionGlCrData([]));
    }
  };

  // get provision gl od data api call
  const getProvissionGlOdDataApiCall = async () => {
    try {
      const res = await getLoanProductDataAPI("PROVISSIONGLOD");
      if (res.message === "Data Found") {
        dispatch(getProvissionGlOdData(res.details));
      } else {
        dispatch(getProvissionGlOdData([]));
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      dispatch(getProvissionGlOdData([]));
    }
  };

  // post loan product api call
  const postLoanProductApiCall = async (data) => {
    setLoading(true);
    try {
      const res = await postLoanProductAPI(data);
      if (res.message === "Success") {
        toast.success(res.details);
        loanProductForm.reset();
        getLoanProductDataApiCall();
        setOpenDialouge(false);
      } else toast.error(res.details);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // get loan product data list
  const getLoanProductDataApiCall = async () => {
    try {
      const res = await getLoanProductDataAPI("LOANPRODUCT");
      if (res.message === "Data Found") {
        dispatch(getLoanProductData(res.details));
      } else {
        dispatch(getLoanProductData([]));
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      dispatch(getLoanProductData([]));
    }
  };

  return {
    getLoanProductTypeDataApiCall,
    getPrincipalGlCrDataApiCall,
    getPrincipalGlOdDataApiCall,
    getInterestGlCrDataApiCall,
    getInterestGlOdDataApiCall,
    getProvissionGlCrDataApiCall,
    getProvissionGlOdDataApiCall,
    getLoanProductDataApiCall,
    loading,
    loanProductForm,
    handleSubmit,
    openDialouge,
    setOpenDialouge,
  };
};
