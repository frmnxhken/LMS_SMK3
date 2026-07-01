import React, { useState } from "react";
import Button from "@/shared/ui/buttons/Button";
import FormInput from "@/shared/ui/forms/FormInput";

const SettingSchoolForm = ({ initData, onSubmit, isPending, errors }) => {
  const [formData, setFormData] = useState({
    latitude: initData?.latitude || "",
    longitude: initData?.longitude || "",
    radius: initData?.radius || "",
    start_time: initData?.start_time || "",
  });

  const handleInput = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormInput
          onInput={handleInput}
          label="Latitude"
          name="latitude"
          value={formData.latitude}
          feedback={errors?.latitude?.[0]}
        />
        <FormInput
          onInput={handleInput}
          label="Longitude"
          name="longitude"
          value={formData.longitude}
          feedback={errors?.longitude?.[0]}
        />
      </div>
      <FormInput
        onInput={handleInput}
        label="Radius (meter)"
        type="number"
        name="radius"
        value={formData.radius}
        feedback={errors?.radius?.[0]}
      />
      <FormInput
        onInput={handleInput}
        label="Jam Masuk"
        type="time"
        name="start_time"
        value={formData.start_time}
        feedback={errors?.start_time?.[0]}
      />
      <Button isLoading={isPending}>Simpan</Button>
    </form>
  );
};

export default SettingSchoolForm;
