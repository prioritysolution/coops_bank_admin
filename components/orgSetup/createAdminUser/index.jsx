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

const CreateAdminUser = ({ loading, form, handleSubmit }) => {
  const orgList = useSelector((state) => state.createOrg.orgData).map(
    (item) => {
      return {
        id: `${item.Id}`,
        label: item.Org_Name,
      };
    }
  );

  const orgBranchList = useSelector(
    (state) => state?.organisationBranch?.branchData
  )?.map((item) => {
    return {
      id: `${item?.Id}`,
      label: item?.Branch_Name,
    };
  });

  return (
    <div className="w-full h-full bg-white rounded-lg flex  justify-center items-center py-[100px]">
      <div className="flex flex-col justify-between gap-10 h-full w-[600px] border-2 border-green p-20 py-10 rounded-lg ">
        <h1 className="text-center text-xl font-semibold">
          Create Organisation Admin User
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="h-full flex flex-col justify-between gap-5 "
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
              name="branchId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Branch</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      disabled={
                        !orgBranchList ||
                        orgBranchList.length === 0 ||
                        form.getValues("orgId").length === 0
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select branch" />
                      </SelectTrigger>
                      <SelectContent>
                        {orgBranchList.map(({ id, label }) => (
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
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile No.</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your mobile no." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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

export default CreateAdminUser;
