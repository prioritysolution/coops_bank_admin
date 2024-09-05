"use client";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  getOrgDetailsAPI,
  postSetFinancialYearAPI,
} from "./SetFinancialYearApis";
import toast from "react-hot-toast";

export const useSetFinancialYear = () => {
  const [loading, setLoading] = useState(false);
  const [endDate, setEndDate] = useState("YYYY");
  const [disableDateInput, setDisableDateInput] = useState(false);

  const formSchema = yup.object({
    orgId: yup.string().required("Please select an organisation"),
    startDate: yup.number().required("Please select a start year"),
  });

  const setFinancialYearForm = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      orgId: "",
      startDate: "",
    },
  });

  const { control } = setFinancialYearForm;
  const startDate = useWatch({ control, name: "startDate" });
  const orgId = useWatch({ control, name: "orgId" });

  const handleSubmit = (values) => {
    let data = {
      org_id: values.orgId,
      start_date: `${values.startDate}-04-01`,
      end_date: `${endDate}-03-31`,
    };
    postSetFinancialYearApicall(data);
  };

  const getOrgDetailsApiCall = async (id) => {
    const res = await getOrgDetailsAPI(id);
    if (res.message === "Data Found") {
      setFinancialYearForm.setValue(
        "startDate",
        Number(res.details.Start_Date.split("-")[0])
      );
      setDisableDateInput(true);
    } else {
      setDisableDateInput(false);
    }
  };

  const postSetFinancialYearApicall = async (data) => {
    setLoading(true);
    try {
      const res = await postSetFinancialYearAPI(data);
      if (res.message === "Success") {
        toast.success(res.details);
        setFinancialYearForm.reset();
        setDisableDateInput(false);
      } else toast.error(res.details);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setEndDate(
      Number(startDate) >= 2020 && Number(startDate) <= 2499
        ? Number(startDate) + 1
        : "YYYY"
    );
  }, [startDate]);

  useEffect(() => {
    if (setFinancialYearForm.getValues().orgId.length > 0) {
      getOrgDetailsApiCall(orgId);
    }
  }, [orgId]);

  return {
    endDate,
    disableDateInput,
    setFinancialYearForm,
    handleSubmit,
    loading,
  };
};
