"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import { getOrgData, getOrgType } from "./CreateOrgReducer";
import { getOrgDataAPI, postAddOrgAPI } from "./CreateOrgApis";

export const useCreateOrg = () => {
  const dispatch = useDispatch();

  //loader
  const [loading, setLoading] = useState(false);
  const [orgListLoading, setOrgListLoading] = useState(false);

  // open dialouge
  const [openDialouge, setOpenDialouge] = useState(false);

  // orgForm schema
  const formSchema = yup.object({
    orgName: yup.string().required("Name is required"),
    address: yup.string().required("Address is required"),
    regNo: yup.string().required("Registration number is required"),
    regDate: yup.date().required("Please select registration date"),
    contact: yup.string().required("Invalid number"),
    email: yup.string().email("Invalid email").required("Please enter email"),
    gstIn: yup.string(),
    orgType: yup.string().required("Organisation type is required"),
  });

  // org form
  const addOrgForm = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      orgName: "",
      address: "",
      regNo: "",
      regDate: null,
      contact: "",
      email: "",
      gstIn: "",
      orgType: "",
    },
  });

  // org form handler
  const handleSubmit = (values) => {
    let data = {
      org_name: values.orgName,
      org_address: values.address,
      org_reg_no: values.regNo,
      org_reg_date: values.regDate.toISOString().slice(0, 10),
      org_mobile: values.contact,
      org_mail: values.email,
      org_gstin: values.gstIn,
      org_type: values.orgType,
    };
    postNewOrgApiCall(data);
  };

  // get org type data
  const getOrgTypeDataApiCall = async () => {
    try {
      const res = await getOrgDataAPI("OrgType");
      if (res.message === "Data Found") {
        dispatch(getOrgType(res.details));
      } else {
        dispatch(getOrgType([]));
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      dispatch(getOrgType([]));
    }
  };

  // post new org
  const postNewOrgApiCall = async (data) => {
    setLoading(true);
    try {
      const res = await postAddOrgAPI(data);
      if (res.message === "Success") {
        toast.success(res.details);
        addOrgForm.reset();
        getOrgListApiCall();
        setOpenDialouge(false);
      } else toast.error(res.details);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // get org list
  const getOrgListApiCall = async () => {
    setOrgListLoading(true);
    try {
      const res = await getOrgDataAPI("OrgList");
      if (res.message == "Data Found") {
        console.log(res);
        dispatch(getOrgData(res.details));
      } else {
        dispatch(getOrgData([]));
        toast.error(res.details);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      dispatch(getOrgData([]));
    } finally {
      setOrgListLoading(false);
    }
  };

  return {
    getOrgTypeDataApiCall,
    loading,
    addOrgForm,
    handleSubmit,
    orgListLoading,
    getOrgListApiCall,
    openDialouge,
    setOpenDialouge,
  };
};
