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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ShareProduct = ({ loading, form, handleSubmit }) => {
  const memberTypeData = useSelector(
    (state) => state?.shareProduct?.memberTypeData
  );

  const admissionGlData = useSelector(
    (state) => state?.shareProduct?.admissionGlData
  );

  const shareGlData = useSelector((state) => state?.shareProduct?.shareGlData);

  const dividendGlData = useSelector(
    (state) => state?.shareProduct?.dividendGlData
  );

  return (
    <div className="w-full h-full bg-white rounded-lg flex  justify-center items-center py-[100px]">
      <div className="flex flex-col justify-between gap-10 h-full w-[600px] border-2 border-green p-20 py-10 rounded-lg ">
        <h1 className="text-center text-xl font-semibold">Share Product</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="h-full flex flex-col justify-between gap-5 "
            autoComplete="off"
          >
            <FormField
              control={form.control}
              name="memberType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Member Type</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select member type" />
                      </SelectTrigger>
                      <SelectContent>
                        {memberTypeData.map(({ Id, Option_Value }) => (
                          <SelectItem key={Id} value={Id.toString()}>
                            {Option_Value}
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
              name="admissionGl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Admission GL</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select admission gl" />
                      </SelectTrigger>
                      <SelectContent>
                        {admissionGlData.map(({ Id, Ledger_Name }) => (
                          <SelectItem key={Id} value={Id.toString()}>
                            {Ledger_Name}
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
              name="shareGl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Share GL</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select share gl" />
                      </SelectTrigger>
                      <SelectContent>
                        {shareGlData.map(({ Id, Ledger_Name }) => (
                          <SelectItem key={Id} value={Id.toString()}>
                            {Ledger_Name}
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
              name="dividendGl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dividend GL</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select dividend gl" />
                      </SelectTrigger>
                      <SelectContent>
                        {dividendGlData.map(({ Id, Ledger_Name }) => (
                          <SelectItem key={Id} value={Id.toString()}>
                            {Ledger_Name}
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
              Add
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ShareProduct;
