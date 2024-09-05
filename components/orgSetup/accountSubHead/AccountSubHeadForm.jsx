"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const AccountSubHeadForm = ({ headList, loading, form, handleSubmit }) => {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className=" flex flex-col items-stretch gap-3 "
        autoComplete="off"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sub Head Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter sub head name"
                  {...field}
                  className=""
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="underHead"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Under Head</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select under head" />
                  </SelectTrigger>
                  <SelectContent className="">
                    {headList.map(({ id, label }) => (
                      <SelectItem key={id} value={id}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full text-white bg-green hover:bg-green/80 text-lg"
        >
          Assign
        </Button>
      </form>
    </Form>
  );
};

export default AccountSubHeadForm;
