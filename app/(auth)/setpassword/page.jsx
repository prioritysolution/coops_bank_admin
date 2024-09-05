"use client";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const formSchema = yup.object({
  password: yup.string().min(5),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const SetPasswordPage = () => {
  const form = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      passsword: "",
      confirmpassword: "",
    },
  });

  const handleSubmit = () => {};
  return (
    <div>
      <div className="text-start flex flex-col items-start w-full gap-2 mb-12">
        <h1 className="text-4xl font-[500]">Set Password</h1>
        <p className="text-2xl">Set a secure password</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-[400px] flex flex-col gap-8"
        >
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem className="text-end">
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="confirmpassword"
            render={({ field }) => {
              return (
                <FormItem className="text-end">
                  <FormControl>
                    <Input
                      placeholder="Confirm Password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <Button
            type="submit"
            className="w-full text-white bg-green hover:bg-green/80"
          >
            Create
          </Button>
        </form>
      </Form>
      <p className="text-center my-2 text-sm">
        Already have an account?{" "}
        <Link href="/" className="text-green underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SetPasswordPage;
