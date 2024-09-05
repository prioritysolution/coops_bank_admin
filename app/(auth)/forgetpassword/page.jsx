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
  email: yup.string().email(),
});

const ForgetPasswordPage = () => {
  const form = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = () => {};
  return (
    <div className="w-full flex flex-col items-center gap-2">
      <div className="text-start flex flex-col items-start w-full md:w-[500px]  gap-5 mb-6">
        <h1 className="text-4xl font-[500]">Forget Password</h1>
        <p className="text-2xl">Access your account</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-full md:w-[500px] flex flex-col gap-8"
          autoComplete="off"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      {...field}
                      className="px-3 py-2 text-lg"
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
            Send OTP
          </Button>
        </form>
      </Form>
      <p className="text-center my-2 text-sm">
        Already have an account?{" "}
        <Link href="/login" className="text-green underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default ForgetPasswordPage;
