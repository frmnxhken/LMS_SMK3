import React, { useState } from "react";
import FormInput from "@/shared/ui/forms/FormInput";
import Button from "@/shared/ui/buttons/Button";

const TeacherImportForm = ({ onSubmit, onPending, errors, closeModal }) => {
  const [formData, setFormData] = useState({ file: null });

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", formData.file);

    if (onSubmit) {
      onSubmit(data, {
        onSuccess: () => {
          closeModal();
        },
      });
    }
  };
  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      <FormInput
        label="File Excel"
        type="file"
        name="file"
        accept=".xls, .xlsx, .csv"
        onChange={handleFileChange}
        feedback={errors?.file?.[0]}
      />
      <Button isLoading={onPending}>Import</Button>
    </form>
  );
};

export default TeacherImportForm;
