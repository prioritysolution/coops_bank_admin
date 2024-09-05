"use client";

import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { FaPlusCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AssignRole = ({
  userId,
  roleAssignList,
  handleChangeUser,
  form,
  manageOrgOpen,
  adminOpen,
  manageOrgValue,
  adminValue,
  setManageOrgOpen,
  setAdminOpen,
  handleManageOrgValueChange,
  handleAdminValueChange,
  handleSubmit,
  loading,
}) => {
  const roleAssignUserList = useSelector(
    (state) => state.assignRole.assignRoleUserData
  ).map((item) => ({
    value: `${item.Id}`,
    label: item.User_Name,
  }));

  return (
    <div className="w-full h-full bg-white rounded-lg overflow-hidden flex items-stretch p-5 gap-10">
      <div className="w-full h-full flex flex-col justify-between p-10 border border-green rounded-lg gap-20 self-stretch">
        <div className=" ">
          <Select onValueChange={handleChangeUser} value={userId}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select user" />
            </SelectTrigger>
            <SelectContent>
              {roleAssignUserList.length > 0 &&
                roleAssignUserList.map(({ value, label }) => (
                  <SelectItem value={value} key={value}>
                    {label}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
        <Button
          type="submit"
          className="bg-green text-white self-end w-1/3 hover:bg-green/70"
          onClick={form.handleSubmit(handleSubmit)}
        >
          Add
        </Button>
      </div>
      <div className="w-full h-full border border-green rounded-lg p-10 flex flex-col items-start gap-1">
        <h3 className="font-semibold text-lg pb-5">Select Role</h3>
        <Form {...form}>
          <form className="" autoComplete="off">
            <div className="flex flex-col gap-5">
              {roleAssignList.map((item) => (
                <Collapsible
                  key={item.Module_Id}
                  open={item.Module_Id === 2 ? manageOrgOpen : adminOpen}
                  onOpenChange={
                    item.Module_Id === 2 ? setManageOrgOpen : setAdminOpen
                  }
                  className="w-[350px] space-y-2"
                >
                  <div className="flex items-center gap-1 ">
                    <div className="flex items-center gap-3">
                      <Checkbox
                        checked={
                          item.Module_Id === 2 ? manageOrgValue : adminValue
                        }
                        onCheckedChange={
                          item.Module_Id === 2
                            ? handleManageOrgValueChange
                            : handleAdminValueChange
                        }
                      />
                      <p>{item.Module_Name}</p>
                    </div>

                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`w-8 h-8 rounded-full p-0 ${
                          !item.childLinks.length > 0 && "hidden"
                        }`}
                      >
                        <FaPlusCircle />
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  {item.childLinks.length > 0 &&
                    item.childLinks.map((subItem) => (
                      <CollapsibleContent
                        key={subItem.Id}
                        className="space-y-4 px-8"
                      >
                        <FormField
                          control={form.control}
                          name={
                            item.Module_Id === 2 ? `manageOrgData` : `adminData`
                          }
                          render={() => (
                            <FormItem>
                              <FormField
                                key={subItem.Id}
                                control={form.control}
                                name={
                                  item.Module_Id === 2
                                    ? `manageOrgData`
                                    : `adminData`
                                }
                                render={({ field }) => {
                                  return (
                                    <FormItem className="flex items-start space-x-3 space-y-0">
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(
                                            subItem.Id
                                          )}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([
                                                  ...field.value,
                                                  subItem.Id,
                                                ])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) =>
                                                      value !== subItem.Id
                                                  )
                                                );
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        {subItem.Menue_name}
                                      </FormLabel>
                                    </FormItem>
                                  );
                                }}
                              />
                            </FormItem>
                          )}
                        />
                      </CollapsibleContent>
                    ))}
                </Collapsible>
              ))}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AssignRole;
