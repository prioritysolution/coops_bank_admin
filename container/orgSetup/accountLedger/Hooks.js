"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import {
  getAccountLedgerDataAPI,
  postAccountLedgerAPI,
} from "./AccountLedgerApis";
import { getAccountLedgerData } from "./AccountLedgerReducers";

export const useAccountLedger = () => {
  const dispatch = useDispatch();

  //loader
  const [loading, setLoading] = useState(false);

  // open dialouge
  const [openDialouge, setOpenDialouge] = useState(false);

  // add account ledger formm schema
  const formSchema = yup.object({
    name: yup.string().required("Account ledger name is required"),
    underSubHead: yup.string().required("Under sub head is required"),
  });

  //  add account ledger form
  const addAccountLedgerForm = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: "",
      underSubHead: "",
    },
  });

  // account ledger handler
  const handleSubmit = (values) => {
    let data = {
      sub_head_id: values.underSubHead,
      ledger_name: values.name,
    };
    postAccountLedgerApiCall(data);
  };

  // post add accouni ledger api call
  const postAccountLedgerApiCall = async (data) => {
    setLoading(true);
    try {
      const res = await postAccountLedgerAPI(data);
      if (res.message === "Success") {
        toast.success(res.details);
        addAccountLedgerForm.reset();
        getAccountLedgerDataApiCall();
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
  const getAccountLedgerDataApiCall = async () => {
    try {
      const res = await getAccountLedgerDataAPI();
      if (res.message === "Data Found") {
        dispatch(getAccountLedgerData(res.details));
      } else {
        dispatch(getAccountLedgerData([]));
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      dispatch(getAccountLedgerData([]));
    }
  };

  return {
    loading,
    addAccountLedgerForm,
    handleSubmit,
    openDialouge,
    setOpenDialouge,
    getAccountLedgerDataApiCall,
  };
};
