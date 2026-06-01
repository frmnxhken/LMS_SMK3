import React, { useState } from "react";
import Button from "@/shared/ui/buttons/Button";
import FormSelect from "@/shared/ui/forms/FormSelect";

const StudentExportForm = ({ classes, onSubmit, onPending, closeModal }) => {
  const [schoolClassId, setSchoolClassId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(schoolClassId ? Number(schoolClassId) : null);
    closeModal();
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      <FormSelect
        label="Pilih Kelas"
        id="class-select"
        onChange={(e) => setSchoolClassId(e.target.value)}
        name="school_class_id"
        value={schoolClassId}
      >
        <FormSelect.Option value="" disabled>
          Pilih Kelas...
        </FormSelect.Option>

        {classes?.map((c, i) => (
          <FormSelect.Option key={i} value={c.id}>
            {`${c.level} ${c.major}`}
          </FormSelect.Option>
        ))}

        <FormSelect.Option value="other">Pilih...</FormSelect.Option>
      </FormSelect>
      <Button isLoading={onPending} type="submit">
        Export
      </Button>
    </form>
  );
};

export default StudentExportForm;
