"use client";
import CreateUser from "@/components/admin/createUser";
import { useCreateUser } from "./Hooks";

const CreateUserContainer = () => {
  const { createUserForm, handleSubmit, loading } = useCreateUser();

  return (
    <CreateUser
      form={createUserForm}
      handleSubmit={handleSubmit}
      loading={loading}
    />
  );
};

export default CreateUserContainer;
