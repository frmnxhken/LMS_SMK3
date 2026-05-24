import React, { useState } from "react";
import Button from "@/shared/ui/buttons/Button";
import FormInput from "@/shared/ui/forms/FormInput";
import FormSelect from "@/shared/ui/forms/FormSelect";

const StudentForm = ({ classes, initData = {}, onSubmit, errors }) => {
  const [formData, setFormData] = useState({
    nis: initData?.nis || "",
    name: initData?.name || "",
    password: initData?.password || "",
    school_class_id: initData?.school_class_id || "",
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit} method="post" className="space-y-2">
      <FormInput
        label="NIS"
        onInput={handleInput}
        name="nis"
        value={formData.nis}
        feedback={errors?.nis?.[0]}
      />
      <FormInput
        label="Nama Lengkap"
        onInput={handleInput}
        name="name"
        value={formData.name}
        feedback={errors?.name?.[0]}
      />
      <FormInput
        label="Password"
        onInput={handleInput}
        name="password"
        value={formData.password}
        feedback={errors?.password?.[0]}
      />
      <FormSelect
        label="Pilih Kelas"
        id="class-select"
        onChange={handleInput}
        name="school_class_id"
        value={formData.school_class_id}
        feedback={errors?.school_class_id?.[0]}
      >
        <FormSelect.Option value="" disabled>
          Pilih Jurusan...
        </FormSelect.Option>

        {classes?.map((c, i) => (
          <FormSelect.Option key={i} value={c.id}>
            {`${c.level} ${c.major}`}
          </FormSelect.Option>
        ))}

        <FormSelect.Option value="other">Pilih...</FormSelect.Option>
      </FormSelect>
      <Button>Simpan</Button>
    </form>
  );
};

export default StudentForm;
