import React, { useState } from "react";
import Button from "@/shared/ui/buttons/Button";
import FormInput from "@/shared/ui/forms/FormInput";
import { useNavigate } from "react-router";

const ChangePasswordForm = ({ onSubmit, errors }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    current_password: "",
    password: "",
    password_confirmation: "",
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.password_confirmation) {
      alert("Konfirmasi password baru tidak cocok!");
      return;
    }

    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2" method="post">
      <FormInput
        onInput={handleInput}
        label="Password Saat Ini"
        type="password"
        name="current_password"
        value={formData.current_password}
        feedback={errors?.current_password?.[0]}
        required
      />
      <FormInput
        onInput={handleInput}
        label="Password Baru"
        type="password"
        name="password"
        value={formData.password}
        feedback={errors?.password?.[0]}
        required
      />
      <FormInput
        onInput={handleInput}
        label="Konfirmasi Password Baru"
        type="password"
        name="password_confirmation"
        value={formData.password_confirmation}
        feedback={errors?.password_confirmation?.[0]}
        required
      />

      <div className="pt-2 flex justify-end gap-2">
        <Button onClick={() => navigate(-1)} type="button" variant="outline">
          Batal
        </Button>
        <Button type="submit">Ubah Password</Button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
