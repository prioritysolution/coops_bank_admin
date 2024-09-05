"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const ChangePassword = ({ form, handleSubmit, loading }) => {
  return (
    <div className="w-full h-full bg-white rounded-lg flex  justify-center items-center py-[100px]">
      <div className="flex flex-col justify-between gap-10 w-[600px] border-2 border-green p-20 py-10 rounded-lg ">
        <h1 className="text-center text-xl font-semibold">Change Password</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="h-full flex flex-col gap-5  "
            autoComplete="off"
          >
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter a password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter confirm password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full text-white bg-green hover:bg-green/80 text-lg"
            >
              Add
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ChangePassword;
