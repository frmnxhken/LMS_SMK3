import React from "react";
import ChangePasswordForm from "../ui/ChangePasswordForm";
import useUpdatePassword from "../hooks/useUpdatePassword";

export const ChangePasswordPage = () => {
  const { handleUpdate, errors } = useUpdatePassword();

  return (
    <div className="container max-w-[600px] mx-auto p-6">
      <div className="border border-app-border p-6 rounded-xls">
        <h1 className="text-heading font-bold text-xl">Ubah Password</h1>
        <div className="mt-6">
          <ChangePasswordForm onSubmit={handleUpdate} errors={errors} />
        </div>
      </div>
    </div>
  );
};
