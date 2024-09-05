"use client";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import toast from "react-hot-toast";
import { postCreateAdminUserAPI } from "./CreateAdminUserApis";

export const useCreateAdminUser = () => {
  const [loading, setLoading] = useState(false);

  const formSchema = yup.object({
    orgId: yup.string().required("Organisation is required"),
    branchId: yup.string().required("Branch is required"),
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    mobile: yup
      .string()
      .required("Mobile no. is required")
      .min(10, "Invalid mobile no"),
    password: yup
      .string()
      .required("Password is required")
      .min(5, "Enter a strong password"),
  });

  const createAdminUserForm = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      orgId: "",
      branchId: "",
      name: "",
      email: "",
      mobile: "",
      password: "",
    },
  });

  const { orgId } = useWatch({ control: createAdminUserForm.control });

  const handleSubmit = (values) => {
    let data = {
      full_name: values.name,
      user_mail: values.email,
      user_mob: values.mobile,
      user_pass: values.password,
      org_id: values.orgId,
      branch_id: values.branchId,
    };

    postCreateAdminUserApiCall(data);
  };

  const postCreateAdminUserApiCall = async (data) => {
    setLoading(true);
    try {
      const res = await postCreateAdminUserAPI(data);
      if (res.message === "Success") {
        toast.success(res.details);
        createAdminUserForm.reset();
      } else toast.error(res.details);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return {
    orgId,
    createAdminUserForm,
    handleSubmit,
    loading,
  };
};
