import React, { useState } from "react";
import Button from "@/shared/ui/buttons/Button";
import FormSelect from "@/shared/ui/forms/FormSelect";
import useClass from "@/features/class/hooks/useClass";
import useSubject from "@/features/subject/hooks/useSubject";
import useTeacher from "@/features/teacher/hooks/useTeacher";

const TeachingAssignmentForm = ({
  initData = {},
  onSubmit,
  isPending,
  errors,
}) => {
  const { data: classes } = useClass();
  const { data: subjects } = useSubject();
  const { data: teachers } = useTeacher();

  const [formData, setFormData] = useState({
    school_class_id: initData?.school_class_id || "",
    subject_id: initData?.subject_id || "",
    teacher_id: initData?.teacher_id || "",
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} method="post" className="space-y-2">
      <FormSelect
        label="Pilih Kelas"
        onChange={handleInput}
        name="school_class_id"
        value={formData.school_class_id}
        feedback={errors?.school_class_id?.[0]}
      >
        <FormSelect.Option value="" disabled>
          Pilih Kelas...
        </FormSelect.Option>

        {classes?.map((c, i) => (
          <FormSelect.Option key={i} value={c.id}>
            {`${c.level} ${c.major} ${c.section}`}
          </FormSelect.Option>
        ))}

        <FormSelect.Option value="other">Pilih...</FormSelect.Option>
      </FormSelect>

      <FormSelect
        label="Pilih Mapel"
        onChange={handleInput}
        name="subject_id"
        value={formData.subject_id}
        feedback={errors?.subject_id?.[0]}
      >
        <FormSelect.Option value="" disabled>
          Pilih Mapel...
        </FormSelect.Option>

        {subjects?.map((s, i) => (
          <FormSelect.Option key={i} value={s.id}>
            {s.name}
          </FormSelect.Option>
        ))}

        <FormSelect.Option value="other">Pilih...</FormSelect.Option>
      </FormSelect>

      <FormSelect
        label="Pilih Guru"
        onChange={handleInput}
        name="teacher_id"
        value={formData.teacher_id}
        feedback={errors?.teacher_id?.[0]}
      >
        <FormSelect.Option value="" disabled>
          Pilih Guru...
        </FormSelect.Option>

        {teachers?.map((t, i) => (
          <FormSelect.Option key={i} value={t.id}>
            {t.name} - {t.nip}
          </FormSelect.Option>
        ))}

        <FormSelect.Option value="other">Pilih...</FormSelect.Option>
      </FormSelect>

      <Button isLoading={isPending}>Simpan</Button>
    </form>
  );
};

export default TeachingAssignmentForm;
