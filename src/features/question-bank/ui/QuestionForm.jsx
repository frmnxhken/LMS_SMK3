import React, { useState } from "react";
import Button from "@/shared/ui/buttons/Button";
import FormInput from "@/shared/ui/forms/FormInput";
import FormSelect from "@/shared/ui/forms/FormSelect";

const QuestionForm = ({ subjects, initData = {}, onSubmit, errors }) => {
  const [formData, setFormData] = useState({
    title: initData?.title || "",
    duration: initData?.duration || "",
    subject_id: initData?.subject?.id || "",
    type: initData?.type || "",
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <FormInput
        label="Judul"
        name="title"
        value={formData.title}
        onInput={handleInput}
        feedback={errors?.title?.[0]}
      />
      <FormInput
        label="Durasi"
        type="number"
        name="duration"
        value={formData.duration}
        onInput={handleInput}
        feedback={errors?.duration?.[0]}
      />
      <FormSelect
        label="Jenis Ujian"
        name="type"
        value={formData.type}
        onChange={handleInput}
        feedback={errors?.type?.[0]}
      >
        <FormSelect.Option value="" disabled>
          Pilih Jenis Ujian...
        </FormSelect.Option>

        {["uts", "uas", "harian"].map((t, i) => (
          <FormSelect.Option key={i} value={t}>
            {t}
          </FormSelect.Option>
        ))}

        <FormSelect.Option value="other">Pilih...</FormSelect.Option>
      </FormSelect>
      <FormSelect
        label="Mata Pelajaran"
        name="subject_id"
        value={formData.subject_id}
        onChange={handleInput}
        feedback={errors?.subject_id?.[0]}
      >
        <FormSelect.Option value="" disabled>
          Pilih Mata Pelajaran...
        </FormSelect.Option>

        {subjects?.map((s, i) => (
          <FormSelect.Option key={i} value={s.id}>
            {s.name}
          </FormSelect.Option>
        ))}

        <FormSelect.Option value="other">Pilih...</FormSelect.Option>
      </FormSelect>
      <Button>Simpan</Button>
    </form>
  );
};

export default QuestionForm;
