import React from "react";
import ChangePasswordForm from "../ui/ChangePasswordForm";

export const ChangePasswordPage = () => {
  return (
    <div className="container max-w-[600px] mx-auto p-6">
      <h1 className="text-heading font-bold text-xl">Ubah Password</h1>
      <div className="mt-6">
        <ChangePasswordForm />
      </div>
    </div>
  );
};
