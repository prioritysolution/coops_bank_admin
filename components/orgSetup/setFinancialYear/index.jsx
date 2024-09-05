"use client";
import { useSelector } from "react-redux";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const SetFinancialYear = ({
  endDate,
  disableDateInput,
  form,
  handleSubmit,
  loading,
}) => {
  const orgList = useSelector((state) => state.createOrg.orgData).map(
    (item) => {
      return {
        id: `${item.Id}`,
        label: item.Org_Name,
      };
    }
  );

  return (
    <div className="w-full h-full bg-white rounded-lg flex  justify-center items-center py-[100px]">
      <div className="flex flex-col justify-between gap-20 h-full w-[600px] border-2 border-green p-20 py-10 rounded-lg">
        <h1 className="text-center text-xl font-semibold">
          Add Financial Year
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="h-full flex flex-col justify-center gap-10"
            autoComplete="off"
          >
            <FormField
              control={form.control}
              name="orgId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organisation</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select organisation" />
                      </SelectTrigger>
                      <SelectContent>
                        {orgList.map((org) => (
                          <SelectItem key={org.id} value={org.id}>
                            {org.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Registration start date</FormLabel>
                  <FormControl>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <span>01</span>
                        <span>/</span>
                        <span>04</span>
                        <span>/</span>
                      </div>
                      <Input
                        placeholder="Enter year from 2020 to 2499"
                        type="number"
                        min="2020"
                        max="2499"
                        step="1"
                        {...field}
                        disabled={disableDateInput}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold">Registration end date</p>
              <div className="flex items-center gap-2">
                <span>31</span>
                <span>/</span>
                <span>03</span>
                <span>/</span>
                <span>{endDate}</span>
              </div>
            </div>

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

export default SetFinancialYear;
