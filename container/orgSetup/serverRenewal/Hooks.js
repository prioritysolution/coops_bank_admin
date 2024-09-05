"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import toast from "react-hot-toast";
import { format } from "date-fns";

import { postServerRenewalAPI } from "./ServerRenewalApis";

export const useServerRenewal = () => {
  const [loading, setLoading] = useState(false);

  const formSchema = yup.object({
    orgId: yup.string().required("Please select an organisation"),
    startDate: yup.date().required("Please select a start date"),
    endDate: yup
      .date()
      .required("Please select a end date")
      .test(
        "is-greater",
        "End date must be later than start date",
        function (value) {
          const { startDate } = this.parent;
          return !startDate || !value || new Date(value) > new Date(startDate);
        }
      ),
  });

  const serverRenewalForm = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      orgId: "",
      startDate: null,
      endDate: null,
    },
  });

  const handleSubmit = (values) => {
    let data = {
      start_date: format(values.startDate, "yyyy-MM-dd"),
      end_date: format(values.endDate, "yyyy-MM-dd"),
      org_id: values.orgId,
    };
    postServerRenewalApiCall(data);
  };

  const postServerRenewalApiCall = async (data) => {
    setLoading(true);
    try {
      const res = await postServerRenewalAPI(data);
      if (res.message === "Success") {
        toast.success(res.details);
        serverRenewalForm.reset();
      } else toast.error(res.details);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return {
    serverRenewalForm,
    handleSubmit,
    loading,
  };
};
