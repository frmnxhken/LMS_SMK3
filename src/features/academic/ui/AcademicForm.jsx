import React, { useState } from "react";
import Button from "@/shared/ui/buttons/Button";
import FormInput from "@/shared/ui/forms/FormInput";

const AcademicForm = ({ initData = {}, onSubmit, errors }) => {
  const [formData, setFormData] = useState({
    start: initData?.start || new Date().toISOString().substring(0, 10),
    end: initData?.end || "",
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2" method="post">
      <div className="flex gap-x-2">
        <FormInput
          type="date"
          onInput={handleInput}
          label="Tanggal Mulai"
          name="start"
          value={formData?.start}
          feedback={errors?.start?.[0]}
        />
        <FormInput
          type="date"
          onInput={handleInput}
          label="Tanggal Akhir"
          name="end"
          placeholder="2026"
          value={formData?.end}
          feedback={errors?.end?.[0]}
        />
      </div>
      <Button>Simpan</Button>
    </form>
  );
};

export default AcademicForm;
