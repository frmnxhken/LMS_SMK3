import React, { useState } from "react";
import Button from "@/shared/ui/buttons/Button";
import FormInput from "@/shared/ui/forms/FormInput";
import useResetPassword from "../hooks/useResetPassword";

const TeacherForm = ({
  id = null,
  initData = {},
  onSubmit,
  isPending,
  errors,
}) => {
  const [formData, setFormData] = useState({
    nip: initData?.nip || "",
    name: initData?.name || "",
    password: initData?.password || "",
    phone: initData?.phone || "",
  });

  const { handleReset } = useResetPassword();

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <FormInput
        label="NIP"
        onInput={handleInput}
        name="nip"
        value={formData.nip}
        feedback={errors?.nip?.[0]}
      />
      <FormInput
        label="Nama Lengkap"
        onInput={handleInput}
        name="name"
        value={formData.name}
        feedback={errors?.name?.[0]}
      />
      <FormInput
        type="number"
        label="Telepon"
        onInput={handleInput}
        name="phone"
        value={formData.phone}
        feedback={errors?.phone?.[0]}
      />
      <div className="flex gap-2">
        {initData?.nip && (
          <Button
            onClick={() => handleReset(id)}
            variant="outline"
            type="button"
          >
            Reset Password
          </Button>
        )}
        <Button isLoading={isPending}>Simpan</Button>
      </div>
    </form>
  );
};

export default TeacherForm;
