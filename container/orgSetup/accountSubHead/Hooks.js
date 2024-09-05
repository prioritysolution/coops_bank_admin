"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import {
  getAccountHeadDataAPI,
  postAccountSubHeadAPI,
} from "./AccountSubHeadApis";
import {
  getAccountHeadData,
  getAccountSubHeadData,
} from "./AccountSubHeadReducers";

export const useAccountSubHead = () => {
  const dispatch = useDispatch();

  //loader
  const [loading, setLoading] = useState(false);

  // open dialouge
  const [openDialouge, setOpenDialouge] = useState(false);

  // add account subhead formm schema
  const formSchema = yup.object({
    name: yup.string().required("Sub head name is required"),
    underHead: yup.string().required("Under head is required"),
  });

  //  add account sub head form
  const addAccountSubHeadForm = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: "",
      underHead: "",
    },
  });

  // add account sub head handler
  const handleSubmit = (values) => {
    let data = {
      head_id: values.underHead,
      head_Name: values.name,
    };
    postAccountSubHeadApiCall(data);
  };

  // get account head api call
  const getAccountHeadDataApiCall = async () => {
    try {
      const res = await getAccountHeadDataAPI("AccountHead");
      if (res.message === "Data Found") {
        dispatch(getAccountHeadData(res.details));
      } else {
        dispatch(getAccountHeadData([]));
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      dispatch(getAccountHeadData([]));
    }
  };

  // post add accoun sub head api call
  const postAccountSubHeadApiCall = async (data) => {
    setLoading(true);
    try {
      const res = await postAccountSubHeadAPI(data);
      if (res.message === "Success") {
        toast.success(res.details);
        addAccountSubHeadForm.reset();
        getAccountSubHeadDataApiCall();
        setOpenDialouge(false);
      } else toast.error(res.details);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // get account sub head data list
  const getAccountSubHeadDataApiCall = async () => {
    try {
      const res = await getAccountHeadDataAPI("AccountSubHead");
      if (res.message === "Data Found") {
        dispatch(getAccountSubHeadData(res.details));
      } else {
        dispatch(getAccountSubHeadData([]));
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      dispatch(getAccountSubHeadData([]));
    }
  };

  return {
    getAccountHeadDataApiCall,
    loading,
    addAccountSubHeadForm,
    handleSubmit,
    openDialouge,
    setOpenDialouge,
    getAccountSubHeadDataApiCall,
  };
};
