import React, { useState } from "react";
import FormSelect from "@/shared/ui/forms/FormSelect";
import FormTextarea from "@/shared/ui/forms/FormTextArea";
import Button from "@/shared/ui/buttons/Button";

const AcademicCalendarForm = ({
  initData,
  onSubmit,
  onPending,
  errors,
  closeModal,
}) => {
  const [formData, setFormData] = useState({
    is_school_day: initData?.isSchoolDay,
    description: initData?.description || "",
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(initData?.id, formData, {
        onSuccess: () => {
          closeModal();
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <FormSelect
        label="Status"
        name="is_school_day"
        onChange={handleInput}
        value={formData?.is_school_day}
        feedback={errors?.is_school_day?.[0]}
      >
        <FormSelect.Option value="1">Masuk</FormSelect.Option>
        <FormSelect.Option value="0">Libur</FormSelect.Option>
      </FormSelect>
      <FormTextarea
        label="Deskripsi"
        name="description"
        onInput={handleInput}
        value={formData?.description}
        feedback={errors?.description?.[0]}
      />
      <Button isLoading={onPending}>Simpan</Button>
    </form>
  );
};

export default AcademicCalendarForm;
