import React, { useState } from "react";
import FormSelect from "@/shared/ui/forms/FormSelect";
import Button from "@/shared/ui/buttons/Button";
import useClass from "@/features/class/hooks/useClass";
import useSubject from "@/features/subject/hooks/useSubject";
import useTeacher from "@/features/teacher/hooks/useTeacher";
import useTeachingAssignmentStore from "../hooks/useTeachingAssignmentStore";

const TeachingAssignmentCreatePage = () => {
  const { data: classes } = useClass();
  const { data: subjects } = useSubject();
  const { data: teachers } = useTeacher();
  const { handleSubmit: handleStore } = useTeachingAssignmentStore();
  const [formData, setFormData] = useState({
    school_class_id: "",
    subject_id: "",
    teacher_id: "",
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleStore(formData);
  };

  return (
    <div className="container max-w-[780px] mx-auto p-6">
      <div className="border border-app-border p-4 rounded-xl">
        <form onSubmit={handleSubmit} method="post" className="space-y-2">
          <FormSelect
            onChange={handleInput}
            label="Kelas"
            name="school_class_id"
            value={formData.school_class_id}
            //   onChange={(e) => setForm({ ...form, class_id: e.target.value })}
            options={classes?.map((c, i) => ({
              value: c.id,
              label: c.level + " " + c.major,
            }))}
            //   feedback={errors.class_id}
          />

          <FormSelect
            onChange={handleInput}
            label="Mata pelajaran"
            name="subject_id"
            value={formData.subject_id}
            options={subjects?.map((subject, i) => ({
              value: subject.id,
              label: subject.name,
            }))}
          />
          <FormSelect
            onChange={handleInput}
            label="Guru pengajar"
            name="teacher_id"
            value={formData.teacher_id}
            options={teachers?.map((teacher, i) => ({
              value: teacher.id,
              label: teacher.name,
            }))}
          />
          <Button>Simpan</Button>
        </form>
      </div>
    </div>
  );
};

export default TeachingAssignmentCreatePage;
