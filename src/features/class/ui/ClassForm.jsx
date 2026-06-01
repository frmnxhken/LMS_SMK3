import React, { useState } from "react";
import Button from "@/shared/ui/buttons/Button";
import FormInput from "@/shared/ui/forms/FormInput";

const ClassForm = ({ initData, onSubmit, closeModal }) => {
  const [formData, setFormData] = useState({
    level: initData?.level || "",
    major: initData?.major || "",
    section: initData?.section || "",
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
      closeModal();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2" method="post">
      <FormInput
        onInput={handleInput}
        label="Tingkatan"
        type="number"
        name="level"
        value={formData?.level}
        placeholder="Contoh: 10"
      />
      <FormInput
        onInput={handleInput}
        label="Jurusan"
        name="major"
        value={formData?.major}
        placeholder="RPL 3"
      />
      <FormInput
        onInput={handleInput}
        label="Kelas"
        name="section"
        value={formData?.section}
        placeholder="Contoh: 1/2/3"
      />
      <Button>Simpan</Button>
    </form>
  );
};

export default ClassForm;
