"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import toast from "react-hot-toast";
import { postCreateUserAPI } from "./CreateUserApis";

export const useCreateUser = () => {
  const [loading, setLoading] = useState(false);

  const formSchema = yup.object({
    name: yup.string().required("Username is required"),
    email: yup.string().email().required("Email is required"),
    mobile: yup
      .string()
      .required("Mobile no. is required")
      .min(10, "Invalid mobile no"),
    password: yup
      .string()
      .required("Password is required")
      .min(5, "Enter a strong password"),
    isAdmin: yup.boolean(),
  });

  const createUserForm = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
      isAdmin: false,
    },
  });

  const handleSubmit = (values) => {
    let data = {
      user_name: values.name,
      user_mail: values.email,
      user_mob: values.mobile,
      user_pass: values.password,
      is_admin: values.isAdmin,
    };

    postCreateUserApiCall(data);
  };

  const postCreateUserApiCall = async (data) => {
    setLoading(true);
    try {
      const res = await postCreateUserAPI(data);
      if (res.message === "Success") {
        toast.success(res.details);
        createUserForm.reset();
      } else toast.error(res.details);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return {
    createUserForm,
    handleSubmit,
    loading,
  };
};
