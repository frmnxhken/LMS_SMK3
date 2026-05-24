import Button from "@/shared/ui/buttons/Button";
import FormInput from "@/shared/ui/forms/FormInput";
import FormSelect from "@/shared/ui/forms/FormSelect";
import React, { useState } from "react";

const StudentImportForm = ({ classes, onSubmit, errors, closeModal }) => {
  const [formData, setFormData] = useState({
    school_class_id: "",
    file: null,
  });

  const handleSelectChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("school_class_id", formData.school_class_id);
    data.append("file", formData.file);

    if (onSubmit) {
      onSubmit(data);
      closeModal();
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
      <FormSelect
        label="Pilih Kelas"
        id="class-select"
        onChange={handleSelectChange}
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
      <Button type="submit">Import</Button>
    </form>
  );
};

export default StudentImportForm;
