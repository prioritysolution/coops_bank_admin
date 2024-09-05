"use client";
import React from "react";
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

const Login = ({ form, loading, handleSubmit }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-start flex flex-col items-start w-full md:w-[500px]  gap-5 mb-6">
        <h1 className="text-4xl font-[500]">
          Welcome to organisation admin panel
        </h1>
        <p className="text-2xl">Login to access your account</p>
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

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <>
                      <Input
                        placeholder="Password"
                        type="password"
                        {...field}
                        onChange={field.onChange}
                        className="px-3 py-2 text-lg outline-none"
                      />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Link
            href="/forgetpassword"
            className="text-sm text-end w-full -mt-6"
          >
            Forgot Password?
          </Link>

          <Button
            type="submit"
            className="w-full text-white bg-green hover:bg-green/80 text-lg"
          >
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Login;
