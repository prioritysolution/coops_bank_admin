"use client";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { getAssignRoleAPI, postAssignRoleAPI } from "./AssignRoleApis";
import { getAssignRoleData, getAssignRoleUserData } from "./AssignRoleReducers";
import { useDispatch, useSelector } from "react-redux";

export const useAssignRole = () => {
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [manageOrgOpen, setManageOrgOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [manageOrgValue, setManageOrgValue] = useState(false);
  const [adminValue, setAdminValue] = useState(false);

  const dispatch = useDispatch();

  const roleAssignList = useSelector(
    (state) => state.assignRole.assignRoleData
  );

  const formSchema = yup.object({
    manageOrgData: yup.array().of(yup.string()),
    adminData: yup.array().of(yup.string()),
  });

  const assignRoleForm = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      manageOrgData: [],
      adminData: [],
    },
  });

  const { control } = assignRoleForm;

  const { adminData, manageOrgData } = useWatch({
    control,
  });

  const handleChangeUser = (value) => {
    setUserId(value);
  };

  const handleManageOrgValueChange = (value) => {
    setManageOrgValue(value);
    if (value) setManageOrgOpen(true);
  };
  const handleAdminValueChange = (value) => {
    setAdminValue(value);
    if (value) setAdminOpen(true);
  };

  const handleSubmit = (values) => {
    if (userId.length > 0 && Number(userId) !== NaN) {
      if (values.manageOrgData.length > 0 || values.adminData.length > 0) {
        const newManageOrgData =
          values.manageOrgData.length > 0
            ? values.manageOrgData.map((item) => ({
                module_id: "2",
                menue_id: item,
              }))
            : [];
        const newAdminData =
          values.adminData.length > 0
            ? values.adminData.map((item) => ({
                module_id: "3",
                menue_id: item,
              }))
            : [];
        let data = {
          user_id: userId,
          module_array: [...newManageOrgData, ...newAdminData],
        };
        postAssignRoleApiCall(data);
      } else toast.error("Please select atleast one role");
    } else {
      toast.error("Please add user");
    }
  };

  const postAssignRoleApiCall = async (data) => {
    setLoading(true);
    try {
      const res = await postAssignRoleAPI(data);
      if (res.message === "Success") {
        toast.success(res.details);
        assignRoleForm.reset();
        handleChangeUser("");
        setManageOrgValue(false);
        setAdminValue(false);
        setManageOrgOpen(false);
        setAdminOpen(false);
      } else toast.error(res.message);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // get assign role list
  const getAssignRoleUserDataApiCall = async () => {
    try {
      const res = await getAssignRoleAPI("USER");
      if (res.message === "Data Found") {
        dispatch(getAssignRoleUserData(res.details));
      } else {
        dispatch(getAssignRoleUserData([]));
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      dispatch(getAssignRoleUserData([]));
    }
  };

  const getAssignRoleDataApiCall = async () => {
    try {
      const res = await getAssignRoleAPI("ROLE");
      if (res.message === "Data Found") {
        dispatch(getAssignRoleData(res.Data));
      } else {
        dispatch(getAssignRoleData([]));
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      dispatch(getAssignRoleData([]));
    }
  };

  useEffect(() => {
    if (manageOrgData.length > 0) setManageOrgValue(true);
    else setAdminValue(false);

    if (adminData.length > 0) setAdminValue(true);
    else setAdminValue(false);
  }, [manageOrgData, adminData]);

  useEffect(() => {
    if (manageOrgValue) {
      if (!manageOrgData.length > 0) {
        assignRoleForm.setValue(
          `manageOrgData`,
          roleAssignList[0].childLinks.map((item) => item.Id)
        );
      }
    } else {
      assignRoleForm.setValue(`manageOrgData`, []);
    }

    if (adminValue) {
      if (!adminData.length > 0) {
        assignRoleForm.setValue(
          `adminData`,
          roleAssignList[1].childLinks.map((item) => item.Id)
        );
      }
    } else {
      assignRoleForm.setValue(`adminData`, []);
    }
  }, [manageOrgValue, adminValue]);

  return {
    getAssignRoleDataApiCall,
    getAssignRoleUserDataApiCall,
    userId,
    roleAssignList,
    handleChangeUser,
    assignRoleForm,
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
  };
};
