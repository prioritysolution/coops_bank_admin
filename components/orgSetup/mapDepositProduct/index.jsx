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

const MapDepositProduct = ({
  loading,
  form,
  handleSubmit,
  disableForm,
  disableFormMessage,
}) => {
  const orgListData = useSelector((state) => state.createOrg.orgData).map(
    (item) => {
      return {
        value: `${item.Id}`,
        label: item.Org_Name,
      };
    }
  );

  const productData = useSelector(
    (state) => state.depositProduct.depositProductData
  ).map((item) => ({
    value: `${item.Id}`,
    label: item.Product_Name,
  }));

  const inttTypeData = useSelector(
    (state) => state.mapDepositProduct.inttTypeData
  ).map((item) => ({
    value: `${item.Id}`,
    label: item.Option_Value,
  }));

  const durationUnitData = useSelector(
    (state) => state.mapDepositProduct.durationUnitData
  ).map((item) => ({
    value: `${item.Id}`,
    label: item.Option_Value,
  }));

  const fineOnData = useSelector(
    (state) => state.mapDepositProduct.fineOnData
  ).map((item) => ({
    value: `${item.Id}`,
    label: item.Option_Value,
  }));

  return (
    <div className="w-full h-full bg-white rounded-lg flex  justify-center items-center p-10 lg:px-20">
      <div className="flex flex-col justify-between gap-5 h-full w-full border-2 border-green p-10 sm:p-5 xl:p-5 rounded-lg ">
        <h1 className="text-center text-xl font-semibold">
          Create Map Deposit Product
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="h-full flex flex-col items-end gap-5"
            autoComplete="off"
          >
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-start content-between gap-10 gap-y-3 ">
              <FormField
                control={form.control}
                name="orgId"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Organisation</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select organisation" />
                        </SelectTrigger>
                        <SelectContent>
                          {orgListData.map(({ value, label }) => (
                            <SelectItem key={value} value={value}>
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

              <FormField
                control={form.control}
                name="productId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        disabled={disableForm}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select product" />
                        </SelectTrigger>
                        <SelectContent>
                          {productData.map(({ value, label }) => (
                            <SelectItem key={value} value={value}>
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

              <FormField
                control={form.control}
                name="productName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Short Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter product short name"
                        {...field}
                        disabled={disableForm}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="interestType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Interest Type</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        disabled={disableForm}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select interest type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inttTypeData.map(({ value, label }) => (
                            <SelectItem key={value} value={value}>
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

              <FormField
                control={form.control}
                name="minAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Minimum Amount</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter minimun amount"
                        type="number"
                        disabled={disableForm}
                        value={field.value}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="maxAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Maximum Amount</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter maximun amount"
                        type="number"
                        disabled={disableForm}
                        value={field.value}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rateOfInterest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rate Of Interest</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter rate of interest"
                        type="number"
                        disabled={disableForm}
                        value={field.value}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="minDuration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Minimum Duration</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter minimun duration"
                        type="number"
                        disabled={disableForm}
                        value={field.value}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="maxDuration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Maximum Duration</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter maximun duration"
                        type="number"
                        disabled={disableForm}
                        value={field.value}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="durationUnit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Duration Unit</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        disabled={disableForm}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select duration unit" />
                        </SelectTrigger>
                        <SelectContent>
                          {durationUnitData.map(({ value, label }) => (
                            <SelectItem key={value} value={value}>
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

              <FormField
                control={form.control}
                name="lockInPeriod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lock In Period (month)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter lock in period"
                        type="number"
                        disabled={disableForm}
                        value={field.value}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="passbookFees"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Passbook Fees</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter passbook fees"
                        type="number"
                        disabled={disableForm}
                        value={field.value}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="installmentFine"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Installment Default Fine</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter installment default fine"
                        type="number"
                        disabled={disableForm}
                        value={field.value}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fineChargeOn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fine Charge On</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        disabled={disableForm}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select fine charge on" />
                        </SelectTrigger>
                        <SelectContent>
                          {fineOnData.map(({ value, label }) => (
                            <SelectItem key={value} value={value}>
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

              <FormField
                control={form.control}
                name="inopperativeMonth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Inoperative Month</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter inoperative month"
                        type="number"
                        disabled={disableForm}
                        value={field.value}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dormatMonth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dormat Month</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter dormat month "
                        type="number"
                        disabled={disableForm}
                        value={field.value}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-full h-full flex flex-col md:flex-row gap-5 items-center justify-between">
              <div className="flex items-center w-full md:w-1/3">
                <p
                  className={`text-red-500 ${
                    !disableFormMessage.length > 0 && "hidden"
                  }`}
                >
                  {disableFormMessage}
                </p>
              </div>
              <Button
                type="submit"
                className="w-full md:w-1/3 py-5 text-white bg-green hover:bg-green/80 text-lg"
                disabled={disableForm}
              >
                Add
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
export default MapDepositProduct;
