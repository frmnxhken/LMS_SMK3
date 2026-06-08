import React, { useState } from "react";
import FormSelect from "@/shared/ui/forms/FormSelect";
import { monthNames } from "@/shared/lib/Constants";
import useAcademic from "@/features/academic/hooks/useAcademic";
import useClass from "@/features/class/hooks/useClass";
import Button from "@/shared/ui/buttons/Button";
import useAdminReportExport from "../hooks/useAdminReportExport";
import AdminReportExportFormSkeleton from "./skeletons/AdminReportExportFormSkeleton";

const AdminReportExportForm = () => {
  const { data: academies, isLoading: loadAcademies } = useAcademic();
  const { data: classes, isLoading: loadClasses } = useClass();
  const { handleExport, isExporting, errors } = useAdminReportExport();

  const [formData, setFormData] = useState({
    academic_year_id: "",
    school_class_id: "",
    month: "",
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleExport) handleExport(formData);
  };

  if (loadAcademies && loadClasses) {
    return <AdminReportExportFormSkeleton />;
  }

  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      <FormSelect
        name="academic_year_id"
        label="Tahun Akademik"
        onChange={handleInput}
        feedback={errors?.academic_year_id?.[0]}
      >
        <FormSelect.Option>Pilih Tahun Akademik</FormSelect.Option>
        {academies?.data?.map((academy, index) => (
          <FormSelect.Option value={academy.id}>
            {academy.start.split("-")[0]}/{academy.end.split("-")[0]}
          </FormSelect.Option>
        ))}
      </FormSelect>
      <FormSelect
        name="month"
        label="Bulan"
        onChange={handleInput}
        feedback={errors?.month?.[0]}
      >
        <FormSelect.Option>Pilih Bulan</FormSelect.Option>
        {monthNames.map((month, index) => (
          <FormSelect.Option value={index + 1}>{month}</FormSelect.Option>
        ))}
      </FormSelect>
      <FormSelect
        name="school_class_id"
        label="Kelas"
        onChange={handleInput}
        feedback={errors?.school_class_id?.[0]}
      >
        <FormSelect.Option>Pilih Kelas</FormSelect.Option>
        {classes?.map((c, index) => (
          <FormSelect.Option value={c.id}>
            {c.level} {c.major} {c.section}
          </FormSelect.Option>
        ))}
      </FormSelect>
      <Button isLoading={isExporting}>Export</Button>
    </form>
  );
};

export default AdminReportExportForm;
