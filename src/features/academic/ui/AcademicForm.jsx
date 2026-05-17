import React from "react";
import Button from "@/shared/ui/buttons/Button";
import FormInput from "@/shared/ui/forms/FormInput";

const AcademicForm = () => {
  return (
    <form className="space-y-2" method="post">
      <FormInput label="Tahun akademik" placeholder="2025/2026" />
      <Button>Simpan</Button>
    </form>
  );
};

export default AcademicForm;
