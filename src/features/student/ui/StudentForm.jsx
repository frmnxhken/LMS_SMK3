import React, { useState } from "react";
import Button from "@/shared/ui/buttons/Button";
import FormInput from "@/shared/ui/forms/FormInput";
import FormSelect from "@/shared/ui/forms/FormSelect";
import useResetPassword from "../hooks/useResetPassword";

const StudentForm = ({
  id = null,
  classes,
  initData = {},
  onSubmit,
  isPending,
  errors,
}) => {
  const { handleReset } = useResetPassword();
  const [formData, setFormData] = useState({
    nis: initData?.nis || "",
    name: initData?.name || "",
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
            {`${c.level} ${c.major} ${c.section}`}
          </FormSelect.Option>
        ))}

        <FormSelect.Option value="other">Pilih...</FormSelect.Option>
      </FormSelect>
      <div className="flex gap-2">
        {initData?.nis && (
          <Button
            onClick={() => handleReset(id)}
            variant="outline"
            type="button"
          >
            Reset Password
          </Button>
        )}
        <Button isLoading={isPending}>Simpan</Button>
      </div>
    </form>
  );
};

export default StudentForm;
