import Button from "@/shared/ui/buttons/Button";
import FormInput from "@/shared/ui/forms/FormInput";
import React from "react";

const TeacherReportWeightPage = () => {
  return (
    <div className="container max-w-[680px] mx-auto p-6">
      <div className="border border-app-border p-4 rounded-xl">
        <h1 className="text-xl text-text-heading font-bold mb-4">
          Bobot Penilaian
        </h1>
        <form className="space-y-2">
          <FormInput label="Bobot Tugas" />
          <FormInput label="Bobot UH" />
          <FormInput label="Bobot UTS" />
          <FormInput label="Bobot UAS" />
          <Button size="md">Simpan</Button>
        </form>
      </div>
    </div>
  );
};

export default TeacherReportWeightPage;
