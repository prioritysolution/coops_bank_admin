import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { adminLoginAPI } from "./LoginApis"; // API call for logging in

export const useLogin = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  // Form validation schema
  const formSchema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  // Initialize the form with react-hook-form and yup resolver
  const loginForm = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Handle form submission
  const handleLoginSubmit = (data) => {
    adminLoginApiCall(data);
  };

  // Function to call the login API
  const adminLoginApiCall = async (item) => {
    setLoading(true);
    try {
      // const token = await getTestApiCall();
      // console.log(token);
      const res = await adminLoginAPI(item);
      if (res.message === "Login Successful") {
        // Reset form and navigate on success
        loginForm.reset();
        toast.success("Logged In Successfully");

        sessionStorage.setItem("token", res.token);
        router.push("/dashboard");
      } else {
        toast.error(res.details);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // const getTestApiCall = async () => {
  //   try {
  //     const res = await getTestAPI();
  //     return res[`csrf-token`];
  //   } catch (err) {
  //     console.error(err);
  //     toast.error("Something went wrong");
  //   }
  // };

  return {
    // getTestApiCall,
    loginForm,
    loading,
    handleLoginSubmit,
  };
};
