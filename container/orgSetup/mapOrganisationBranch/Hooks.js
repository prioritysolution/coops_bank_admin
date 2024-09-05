"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import {
  getOrgBranchDataAPI,
  postAddOrgBranchAPI,
} from "./OrganisationBranchApis";
import { getOrganisationBranchData } from "./OrganisationBranchReducer";

export const useMapOrgBranch = () => {
  const dispatch = useDispatch();

  //loader
  const [loading, setLoading] = useState(false);

  // map org branch Form schema
  const formSchema = yup.object({
    orgId: yup.string().required("Organisation is required"),
    branchName: yup.string().required("Branch name is required"),
    address: yup.string().required("Address is required"),
    mobile: yup.string().required("Invalid number"),
    email: yup.string().email("Invalid email").required("Please enter email"),
  });

  // org form
  const mapOrgBranchForm = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      orgId: "",
      branchName: "",
      address: "",
      mobile: "",
      email: "",
    },
  });

  // org form handler
  const handleSubmit = (values) => {
    let data = {
      org_id: values.orgId,
      branch_name: values.branchName,
      branch_add: values.address,
      mobile_no: values.mobile,
      email: values.email,
    };
    postMapOrgBranchApiCall(data);
  };

  // post map org branch
  const postMapOrgBranchApiCall = async (data) => {
    setLoading(true);
    try {
      const res = await postAddOrgBranchAPI(data);
      if (res.message === "Success") {
        toast.success(res.details);
        mapOrgBranchForm.reset();
      } else toast.error(res.details);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // get org branch list
  const getOrgBranchListApiCall = async (id) => {
    try {
      const res = await getOrgBranchDataAPI(id);
      if (res.message == "Data Found") {
        console.log(res);
        dispatch(getOrganisationBranchData(res.details));
      } else {
        dispatch(getOrganisationBranchData([]));
        toast.error(res.details);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      dispatch(getOrganisationBranchData([]));
    }
  };

  return {
    loading,
    mapOrgBranchForm,
    handleSubmit,
    getOrgBranchListApiCall,
  };
};
