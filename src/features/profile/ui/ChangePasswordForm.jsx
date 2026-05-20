import React, { useState } from "react";
import Button from "@/shared/ui/buttons/Button";
import FormInput from "@/shared/ui/forms/FormInput";

const ChangePasswordForm = ({ onSubmit, closeModal }) => {
  const [formData, setFormData] = useState({
    current_password: "",
    new_password: "",
    new_password_confirmation: "",
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.new_password !== formData.new_password_confirmation) {
      alert("Konfirmasi password baru tidak cocok!");
      return;
    }

    if (onSubmit) {
      onSubmit(formData);
      closeModal();
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
        placeholder="••••••••"
        required
      />
      <FormInput
        onInput={handleInput}
        label="Password Baru"
        type="password"
        name="new_password"
        value={formData.new_password}
        placeholder="••••••••"
        required
      />
      <FormInput
        onInput={handleInput}
        label="Konfirmasi Password Baru"
        type="password"
        name="new_password_confirmation"
        value={formData.new_password_confirmation}
        placeholder="••••••••"
        required
      />

      <div className="pt-2 flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={closeModal}>
          Batal
        </Button>
        <Button type="submit">Ubah Password</Button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
