"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import toast from "react-hot-toast";
import { format } from "date-fns";
import { postSmsRefillAPI } from "./SmsRefillApis";

export const useSmsRefill = () => {
  const [loading, setLoading] = useState(false);

  const formSchema = yup.object({
    orgId: yup.string().required("Organisation is required"),
    quantity: yup
      .number()
      .integer("Quantity must be a non-decimal number")
      .required("Quantity is required"),
    expDate: yup.date().required("Expiry date is required"),
  });

  const smsRefillForm = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      orgId: "",
      quantity: "",
      expDate: null,
    },
  });

  const handleSubmit = (values) => {
    let data = {
      sms_qnty: values.quantity,
      end_date: format(values.expDate, "yyyy-MM-dd"),
      org_id: values.orgId,
    };
    console.log(data);
    postSmsRefillApiCall(data);
  };

  const postSmsRefillApiCall = async (data) => {
    setLoading(true);
    try {
      const res = await postSmsRefillAPI(data);
      if (res.message === "Success") {
        toast.success(res.details);
        smsRefillForm.reset();
      } else toast.error(res.details);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return {
    smsRefillForm,
    handleSubmit,
    loading,
  };
};
