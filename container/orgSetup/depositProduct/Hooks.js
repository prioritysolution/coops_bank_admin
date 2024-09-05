"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import {
  getDepositProductDataAPI,
  postDepositProductAPI,
} from "./DepositProductApis";
import {
  getDepositProductData,
  getDepositProductTypeData,
  getDepositTypeData,
  getInttGlData,
  getPrincipalGlData,
  getProvissionGlData,
} from "./DepositProductReducers";

export const useDepositProduct = () => {
  const dispatch = useDispatch();

  //loader
  const [loading, setLoading] = useState(false);

  // open dialouge
  const [openDialouge, setOpenDialouge] = useState(false);

  // assign module formm schema
  const formSchema = yup.object({
    name: yup.string().required("Product name is required"),
    productType: yup.string().required("Product type is reuired"),
    depositType: yup.string().required("Product type is reuired"),
    principalGl: yup.string().required("Product type is reuired"),
    inttGl: yup.string().required("Product type is reuired"),
    provisionGl: yup.string().required("Product type is reuired"),
  });

  // assign module form
  const depositProductForm = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: "",
      productType: "",
      depositType: "",
      principalGl: "",
      inttGl: "",
      provisionGl: "",
    },
  });

  // assign module handler
  const handleSubmit = (values) => {
    let data = {
      product_type: values.productType,
      deposit_type: values.depositType,
      product_name: values.name,
      prn_gl: values.principalGl,
      intt_gl: values.inttGl,
      prov_gl: values.provisionGl,
    };
    postDepositProductApiCall(data);
  };

  // get deposit product type data api call
  const getDepositProductTypeDataApiCall = async () => {
    try {
      const res = await getDepositProductDataAPI("DEPOSITPRODUCTTYPE");
      if (res.message === "Data Found") {
        dispatch(getDepositProductTypeData(res.details));
      } else {
        dispatch(getDepositProductTypeData([]));
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      dispatch(getDepositProductTypeData([]));
    }
  };

  // get deposit type data api call
  const getDepositTypeDataApiCall = async () => {
    try {
      const res = await getDepositProductDataAPI("DEPOSITTYPE");
      if (res.message === "Data Found") {
        dispatch(getDepositTypeData(res.details));
      } else {
        dispatch(getDepositTypeData([]));
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      dispatch(getDepositTypeData([]));
    }
  };

  // get principal gl data api call
  const getPrincipalGlDataApiCall = async () => {
    try {
      const res = await getDepositProductDataAPI("PRINCIPALGL");
      if (res.message === "Data Found") {
        dispatch(getPrincipalGlData(res.details));
      } else {
        dispatch(getPrincipalGlData([]));
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      dispatch(getPrincipalGlData([]));
    }
  };

  // get intt gl data api call
  const getInttGlDataApiCall = async () => {
    try {
      const res = await getDepositProductDataAPI("INTTGL");
      if (res.message === "Data Found") {
        dispatch(getInttGlData(res.details));
      } else {
        dispatch(getInttGlData([]));
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      dispatch(getInttGlData([]));
    }
  };

  // get provission gl data api call
  const getProvissionGlDataApiCall = async () => {
    try {
      const res = await getDepositProductDataAPI("PROVISSIONGL");
      if (res.message === "Data Found") {
        dispatch(getProvissionGlData(res.details));
      } else {
        dispatch(getProvissionGlData([]));
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      dispatch(getProvissionGlData([]));
    }
  };

  // post assign module api call
  const postDepositProductApiCall = async (data) => {
    setLoading(true);
    try {
      const res = await postDepositProductAPI(data);
      if (res.message === "Success") {
        toast.success(res.details);
        depositProductForm.reset();
        getDepositProductDataApiCall();
        setOpenDialouge(false);
      } else toast.error(res.details);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // get deposit product data list
  const getDepositProductDataApiCall = async () => {
    try {
      const res = await getDepositProductDataAPI("DEPOSITPRODUCT");
      if (res.message === "Data Found") {
        dispatch(getDepositProductData(res.details));
      } else {
        dispatch(getDepositProductData([]));
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      dispatch(getDepositProductData([]));
    }
  };

  return {
    getDepositProductTypeDataApiCall,
    getDepositTypeDataApiCall,
    getPrincipalGlDataApiCall,
    getInttGlDataApiCall,
    getProvissionGlDataApiCall,
    getDepositProductDataApiCall,
    loading,
    depositProductForm,
    handleSubmit,
    openDialouge,
    setOpenDialouge,
  };
};
