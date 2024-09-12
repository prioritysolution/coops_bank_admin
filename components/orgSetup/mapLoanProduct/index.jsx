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
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const MapLoanProduct = ({
  loading,
  form,
  handleSubmit,
  disableForm,
  disableFormMessage,
  isOverdue,
  isNpa,
  isShareDeduct,
  isDepositDeduct,
}) => {
  const orgData = useSelector((state) => state.createOrg.orgData).map(
    (item) => {
      return {
        value: `${item.Id}`,
        label: item.Org_Name,
      };
    }
  );

  const loanProductData = useSelector(
    (state) => state.loanProduct.loanProductData
  ).map((item) => ({
    value: `${item.Id}`,
    label: item.Product_Name,
  }));

  const repayTypeData = useSelector(
    (state) => state.mapLoanProduct.repayTypeData
  ).map((item) => ({
    value: `${item.Id}`,
    label: item.Option_Value,
  }));

  const durationUnitData = useSelector(
    (state) => state.mapLoanProduct.durationUnitData
  ).map((item) => ({
    value: `${item.Id}`,
    label: item.Option_Value,
  }));

  const overdueOnData = useSelector(
    (state) => state.mapLoanProduct.overdueOnData
  ).map((item) => ({
    value: `${item.Id}`,
    label: item.Option_Value,
  }));

  const graceOnData = useSelector(
    (state) => state.mapLoanProduct.graceOnData
  ).map((item) => ({
    value: `${item.Id}`,
    label: item.Option_Value,
  }));

  const depositProductData = useSelector(
    (state) => state.mapLoanProduct.depositProductData
  ).map((item) => ({
    value: `${item.Id}`,
    label: item.Product_Name,
  }));

  return (
    <div className="w-full h-full bg-white rounded-lg flex  justify-center items-center p-10 lg:px-20">
      <div className="flex flex-col justify-between gap-5 h-full w-full border-2 border-green p-10 sm:p-5 xl:p-5 rounded-lg ">
        <h1 className="text-center text-xl font-semibold">
          Create Map Loan Product
        </h1>
        {/* <pre>{JSON.stringify({ form }, null, 4)}</pre> */}
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
                          {orgData.map(({ value, label }) => (
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
                          {loanProductData.map(({ value, label }) => (
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
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter product name"
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
                name="repaymentType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Repayment Type</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        disabled={disableForm}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select repayment type" />
                        </SelectTrigger>
                        <SelectContent>
                          {repayTypeData.map(({ value, label }) => (
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
                name="rateOfInterest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rate Of Interest</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter rate of interest"
                        type="number"
                        disabled={disableForm}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="isOverdue"
                className=""
                render={({ field }) => (
                  <FormItem className=" flex flex-row items-end h-full w-full">
                    <div className="flex flex-row items-end space-x-3 space-y-0 rounded-md border p-4 w-full">
                      <FormControl className="">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          disabled={disableForm}
                        />
                      </FormControl>
                      <FormMessage />
                      <div className="space-y-1 leading-none">
                        <FormLabel>Is Overdue</FormLabel>
                      </div>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="overdueOn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Overdue On</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        disabled={disableForm || !isOverdue}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select overdue on option" />
                        </SelectTrigger>
                        <SelectContent>
                          {overdueOnData.map(({ value, label }) => (
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
                name="defaultCountOnOverdue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Default Count On Overdue</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter default count on overdue"
                        type="number"
                        disabled={disableForm || !isOverdue}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="overdueRate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Overdue Rate</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter overdue rate"
                        type="number"
                        disabled={disableForm || !isOverdue}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="graceDays"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Grace Days</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter grace days"
                        type="number"
                        disabled={disableForm}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="graceOn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Grace On</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        disabled={disableForm}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select grace on option" />
                        </SelectTrigger>
                        <SelectContent>
                          {graceOnData.map(({ value, label }) => (
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
                name="isNpa"
                className=""
                render={({ field }) => (
                  <FormItem className=" flex flex-row items-end h-full w-full">
                    <div className="flex flex-row items-end space-x-3 space-y-0 rounded-md border p-4 w-full">
                      <FormControl className="">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          disabled={disableForm || !isOverdue}
                        />
                      </FormControl>

                      <div className="space-y-1 leading-none">
                        <FormLabel>Is NPA</FormLabel>
                      </div>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="npaTreatAfter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>NPA Treat After</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter npa treat after"
                        type="number"
                        disabled={disableForm || !isNpa}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="isShareDeduct"
                className=""
                render={({ field }) => (
                  <FormItem className=" flex flex-row items-end h-full w-full">
                    <div className="flex flex-row items-end space-x-3 space-y-0 rounded-md border p-4 w-full">
                      <FormControl className="">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          disabled={disableForm}
                        />
                      </FormControl>

                      <div className="space-y-1 leading-none">
                        <FormLabel>Is Share Deduct</FormLabel>
                      </div>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sharePercent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Share Percent</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter share percent"
                        type="number"
                        disabled={disableForm || !isShareDeduct}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="isDepositDeduct"
                className=""
                render={({ field }) => (
                  <FormItem className=" flex flex-row items-end h-full w-full">
                    <div className="flex flex-row items-end space-x-3 space-y-0 rounded-md border p-4 w-full">
                      <FormControl className="">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          disabled={disableForm}
                        />
                      </FormControl>

                      <div className="space-y-1 leading-none">
                        <FormLabel>Is Deposit Deduct</FormLabel>
                      </div>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="linkDepositProduct"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Link Deposit Product</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        disabled={disableForm || !isDepositDeduct}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select deposit product" />
                        </SelectTrigger>
                        <SelectContent>
                          {depositProductData.map(({ value, label }) => (
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
                name="depositPercent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deposit Percent</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter deposit percent"
                        type="number"
                        disabled={disableForm || !isDepositDeduct}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="misNature"
                render={({ field }) => (
                  <FormItem className=" self-end">
                    <FormLabel>MIS Nature</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="flex gap-5 border border-input rounded-md py-3 px-3"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="fixed" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Is Fixed
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="percent" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Is Percent
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="misAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      MIS{" "}
                      {form.getValues("misNature") === "fixed"
                        ? "Amount"
                        : "Percent"}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter miss percent"
                        type="number"
                        disabled={disableForm}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="secureDepositProduct"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Secure Deposit Product</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        disabled={disableForm}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select deposit product" />
                        </SelectTrigger>
                        <SelectContent>
                          {depositProductData
                            .filter(
                              (item) =>
                                item.value !==
                                form.getValues("linkDepositProduct")
                            )
                            .map(({ value, label }) => (
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
                name="maxAllow"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Maximum Allow (Percentage)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter maximum allow"
                        type="number"
                        disabled={disableForm}
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
export default MapLoanProduct;
