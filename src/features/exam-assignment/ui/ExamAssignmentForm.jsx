import Button from "@/shared/ui/buttons/Button";
import FormInput from "@/shared/ui/forms/FormInput";
import FormSelect from "@/shared/ui/forms/FormSelect";
import React from "react";

const ExamAssignmentForm = () => {
  return (
    <form className="space-y-2">
      <FormSelect label="Pilih Soal Ujian">
        <FormSelect.Option value="" disabled>
          Pilih Soal Ujian...
        </FormSelect.Option>
      </FormSelect>
      <FormInput label="Jam Mulai" />
      <FormInput label="Jam Berakhir" />
      <Button>Simpan</Button>
    </form>
  );
};

export default ExamAssignmentForm;
