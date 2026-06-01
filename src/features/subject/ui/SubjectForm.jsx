import React, { useState } from "react";
import Button from "@/shared/ui/buttons/Button";
import FormInput from "@/shared/ui/forms/FormInput";

const SubjectForm = ({ initData, onSubmit, onPending, errors, closeModal }) => {
  const [formData, setFormData] = useState({
    name: initData?.name || "",
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData, {
        onSuccess: () => {
          closeModal();
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2" method="post">
      <FormInput
        onInput={handleInput}
        label="Mata pelajaran"
        type="text"
        name="name"
        value={formData?.name}
        placeholder="Pemerograman dasar"
        feedback={errors && errors?.name?.[0]}
      />
      <Button isLoading={onPending}>Simpan</Button>
    </form>
  );
};

export default SubjectForm;
