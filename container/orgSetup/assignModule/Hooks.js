"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { getModuleDataAPI, postAssignModuleAPI } from "./AssignModuleApis";
import { getModuleTypeData, getOrgModuleData } from "./AssignModuleReducer";
import toast from "react-hot-toast";

export const useAssignModule = () => {
  const dispatch = useDispatch();

  //loader
  const [loading, setLoading] = useState(false);

  // open dialouge
  const [openDialouge, setOpenDialouge] = useState(false);

  // assign module settings list
  const settingList = [
    {
      value: "1",
      label: "Demand",
    },
    {
      value: "2",
      label: "SMS",
    },
  ];

  // assign module formm schema
  const formSchema = yup.object({
    orgId: yup.string().required("Please select organisation"),
    check: yup
      .array()
      .min(1, "You must select at least one item")
      .of(yup.string().required("Item is required")),
    settings: yup.array().of(yup.string()),
  });

  // assign module form
  const assignModuleForm = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      orgId: "",
      check: [],
      settings: [],
    },
  });

  // assign module handler
  const handleSubmit = (values) => {
    let data = {
      module_list: values.check.map((item) => ({
        module_id: item,
      })),
      add_data: settingList.map((item) =>
        values.settings.includes(item.value)
          ? { type: item.value, value: "1" }
          : { type: item.value, value: "0" }
      ),
      org_id: values.orgId,
    };
    values.settings = settingList.map((item) =>
      values.settings.includes(item.value)
        ? { type: item.value, value: "1" }
        : { type: item.value, value: "0" }
    );
    postAssignModuleApiCall(data);
  };

  // get module api call
  const getModuleTypeDataApiCall = async () => {
    try {
      const res = await getModuleDataAPI("ModuleType");
      if (res.message === "Data Found") {
        dispatch(getModuleTypeData(res.details));
      } else {
        dispatch(getModuleTypeData([]));
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      dispatch(getModuleTypeData([]));
    }
  };

  // post assign module api call
  const postAssignModuleApiCall = async (data) => {
    setLoading(true);
    try {
      const res = await postAssignModuleAPI(data);
      if (res.message === "Success") {
        toast.success(res.details);
        assignModuleForm.reset();
        getOrgModuleDataApiCall();
        setOpenDialouge(false);
      } else toast.error(res.details);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // get org module data list
  const getOrgModuleDataApiCall = async () => {
    try {
      const res = await getModuleDataAPI("OrgModuleList");
      if (res.message === "Data Found") {
        dispatch(getOrgModuleData(res.details));
      } else {
        dispatch(getOrgModuleData([]));
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      dispatch(getOrgModuleData([]));
    }
  };

  return {
    getModuleTypeDataApiCall,
    loading,
    settingList,
    assignModuleForm,
    handleSubmit,
    openDialouge,
    setOpenDialouge,
    getOrgModuleDataApiCall,
  };
};
