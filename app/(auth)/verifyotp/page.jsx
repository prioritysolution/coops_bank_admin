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
import { MdEdit } from "react-icons/md";

const formSchema = yup.object({
  otp: yup.number().min(6).max(6),
});

const VerifyOtpPage = () => {
  const form = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      otp: "",
    },
  });

  const handleSubmit = () => {};
  return (
    <div className="w-[400px]">
      <div className="text-start flex flex-col items-start w-full gap-2 mb-12  ">
        <h1 className="text-4xl font-[500]">Verification Required</h1>
        <div className="flex items-center justify-start gap-3">
          <span>g.i***@**********ca.com</span>
          <Link
            href="/forgetpassword"
            className="flex items-center justify-start text-sm gap-[2px]"
          >
            <MdEdit />
          </Link>
        </div>
        <p className="text-sm pt-5">
          An email with a One Time Password &#40;OTP&#41; has been sent to the
          email shown above. Please enter it below.
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col gap-8"
        >
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Input placeholder="OTP" type="number" {...field} />
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
            Validate
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

export default VerifyOtpPage;
