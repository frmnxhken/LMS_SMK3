import React, { useState } from "react";
import FormSelect from "@/shared/ui/forms/FormSelect";
import FormInput from "@/shared/ui/forms/FormInput";
import Button from "@/shared/ui/buttons/Button";

const AdminReportForm = ({
  initData = {},
  onSubmit,
  errors,
  closeModal,
  isPending,
}) => {
  const [formData, setFormData] = useState({
    student_id: initData?.student_id || "",
    start_date: initData?.date || new Date().toISOString().substring(0, 10),
    end_date: initData?.date || "",
    status: initData?.status || "",
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit(formData, {
        onSuccess: () => {
          closeModal();
        },
      });
    }
  };
  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      <div className="flex items-center justify-between gap-4 mb-6">
        <p className="text-sm font-semibold">{initData?.name}</p>
        <p className="text-xs text-text-muted">{initData?.nis}</p>
      </div>
      <div className="flex gap-2">
        <FormInput
          onInput={handleInput}
          name="start_date"
          type="date"
          label="Dari"
          value={formData.start_date}
          feedback={errors?.start_date?.[0]}
        />
        <FormInput
          onInput={handleInput}
          name="end_date"
          type="date"
          label="Sampai"
          value={formData.end_date}
          feedback={errors?.end_date?.[0]}
        />
      </div>
      <FormSelect
        name="status"
        label="Status"
        value={formData.status}
        onChange={handleInput}
        feedback={errors?.status?.[0]}
      >
        <FormSelect.Option value="">Pilih Status</FormSelect.Option>
        <FormSelect.Option value="present">Hadir</FormSelect.Option>
        <FormSelect.Option value="late">Terlambat</FormSelect.Option>
        <FormSelect.Option value="permission">Izin</FormSelect.Option>
        <FormSelect.Option value="sick">Sakit</FormSelect.Option>
        <FormSelect.Option value="alpha">Alpha</FormSelect.Option>
      </FormSelect>
      <Button isLoading={isPending}>Simpan</Button>
    </form>
  );
};

export default AdminReportForm;
