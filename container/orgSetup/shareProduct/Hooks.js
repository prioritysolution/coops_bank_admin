"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import {
  getAdmissionGlData,
  getDividendGlData,
  getMemberTypeData,
  getShareGlData,
} from "./ShareProductReducer";
import { getMemberDataAPI, postShareProductAPI } from "./ShareProductApis";

export const useShareProduct = () => {
  const dispatch = useDispatch();

  //loader
  const [loading, setLoading] = useState(false);

  // assign module formm schema
  const formSchema = yup.object({
    memberType: yup.string().required("Member type name is required"),
    admissionGl: yup.string().required("Admission gl is reuired"),
    shareGl: yup.string().required("Share gl is reuired"),
    dividendGl: yup.string().required("Dividend gl is reuired"),
  });

  // assign module form
  const form = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      memberType: "",
      admissionGl: "",
      shareGl: "",
      dividendGl: "",
    },
  });

  // assign module handler
  const handleSubmit = (values) => {
    let data = {
      mem_type: values.memberType,
      adm_gl: values.admissionGl,
      share_gl: values.shareGl,
      div_gl: values.dividendGl,
    };
    postShareProductApiCall(data);
  };

  // post share product api call
  const postShareProductApiCall = async (data) => {
    setLoading(true);
    try {
      const res = await postShareProductAPI(data);
      if (res.message === "Success") {
        toast.success(res.details);
        form.reset();
      } else toast.error(res.details);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // get membertype data api call
  const getMemberTypeDataApiCall = async () => {
    try {
      const res = await getMemberDataAPI("MEMBERTYPE");
      if (res.message === "Data Found") {
        dispatch(getMemberTypeData(res.details));
      } else {
        dispatch(getMemberTypeData([]));
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      dispatch(getMemberTypeData([]));
    }
  };

  // get admission gl data api call
  const getAdmissionGlDataApiCall = async () => {
    try {
      const res = await getMemberDataAPI("ADMISSIONGL");
      if (res.message === "Data Found") {
        dispatch(getAdmissionGlData(res.details));
      } else {
        dispatch(getAdmissionGlData([]));
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      dispatch(getAdmissionGlData([]));
    }
  };

  // get share gl data api call
  const getShareGlDataApiCall = async () => {
    try {
      const res = await getMemberDataAPI("SHAREGL");
      if (res.message === "Data Found") {
        dispatch(getShareGlData(res.details));
      } else {
        dispatch(getShareGlData([]));
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      dispatch(getShareGlData([]));
    }
  };

  // get dividend gl data api call
  const getDividendGlDataApiCall = async () => {
    try {
      const res = await getMemberDataAPI("DIVIDENDGL");
      if (res.message === "Data Found") {
        dispatch(getDividendGlData(res.details));
      } else {
        dispatch(getDividendGlData([]));
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      dispatch(getDividendGlData([]));
    }
  };

  return {
    loading,
    form,
    handleSubmit,
    getMemberTypeDataApiCall,
    getAdmissionGlDataApiCall,
    getShareGlDataApiCall,
    getDividendGlDataApiCall,
  };
};
