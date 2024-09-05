"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { postChangePasswordAPI } from "./ChangePasswordApis";

export const useChangePassword = () => {
  const [loading, setLoading] = useState(false);

  const formSchema = yup.object({
    password: yup
      .string()
      .required("Password is required")
      .min(5, "Enter a strong password"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const changePasswordForm = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = (values) => {
    let data = {
      user_pass: values.password,
      confirm_password: values.confirmPassword,
    };

    postChangePasswordApiCall(data);
  };

  const postChangePasswordApiCall = async (data) => {
    setLoading(true);
    try {
      const res = await postChangePasswordAPI(data);
      if (res.message === "Success") {
        toast.success(res.details);
        changePasswordForm.reset();
      } else toast.error(res.details);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return {
    changePasswordForm,
    handleSubmit,
    loading,
  };
};
