import React, { useState } from "react";
import Button from "@/shared/ui/buttons/Button";
import FormInput from "@/shared/ui/forms/FormInput";
import { useToast } from "@/app/contexts/ToastContext";

const WeightScoreForm = ({ initData = {}, onSubmit, onPending, errors }) => {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    assignment_weight: initData?.assignment_weight * 100 || "",
    daily_weight: initData?.daily_weight * 100 || "",
    uts_weight: initData?.uts_weight * 100 || "",
    uas_weight: initData?.uas_weight * 100 || "",
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = Object.values(formData).reduce(
      (a, b) => parseInt(a) + parseInt(b),
    );

    if (total !== 100)
      return addToast("Total Semua Bobot harus 100", "warning");
    if (onSubmit) {
      onSubmit(formData);
    }
  };
  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      <FormInput
        name="assignment_weight"
        label="Bobot Tugas"
        value={formData?.assignment_weight}
        onInput={handleInput}
        feedback={errors?.assignment_weight?.[0]}
      />
      <FormInput
        name="daily_weight"
        label="Bobot UH"
        value={formData?.daily_weight}
        onInput={handleInput}
        feedback={errors?.daily_weight?.[0]}
      />
      <FormInput
        name="uts_weight"
        label="Bobot UTS"
        value={formData?.uts_weight}
        onInput={handleInput}
        feedback={errors?.uts_weight?.[0]}
      />
      <FormInput
        name="uas_weight"
        label="Bobot UAS"
        value={formData?.uas_weight}
        onInput={handleInput}
        feedback={errors?.uas_weight?.[0]}
      />
      <Button isLoading={onPending} size="md">
        Simpan
      </Button>
    </form>
  );
};

export default WeightScoreForm;
