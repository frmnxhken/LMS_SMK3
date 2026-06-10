import React from "react";
import { useNavigate } from "react-router";
import Button from "@/shared/ui/buttons/Button";
import FormSelect from "@/shared/ui/forms/FormSelect";
import { MdAdd } from "react-icons/md";
import useTeachingAssignment from "../hooks/useTeachingAssignment";
import useClassList from "@/features/class/hooks/useClassList";
import useSubjectList from "@/features/subject/hooks/useSubjectList";

const TeachingAssignmentHeader = () => {
  const navigate = useNavigate();
  const { data: classes } = useClassList();
  const { data: subjects } = useSubjectList();
  const { handleClassChange, handleSubjectChange } = useTeachingAssignment();

  return (
    <div className="flex justify-between items-center gap-x-4">
      <div className="grid grid-cols-2 w-full sm:w-1/2 gap-x-2">
        <FormSelect
          value=""
          onChange={(e) => handleClassChange(e.target.value)}
        >
          <FormSelect.Option value="">Filter Kelas...</FormSelect.Option>
          <FormSelect.Option value="">Semua Kelas</FormSelect.Option>

          {classes?.map((c, i) => (
            <FormSelect.Option key={i} value={c.id}>
              {`${c.level} ${c.major} ${c.section}`}
            </FormSelect.Option>
          ))}
        </FormSelect>

        <FormSelect
          value=""
          onChange={(e) => handleSubjectChange(e.target.value)}
        >
          <FormSelect.Option value="">Pilih Mapel...</FormSelect.Option>
          <FormSelect.Option value="">Semua Mapel</FormSelect.Option>

          {subjects?.map((s, i) => (
            <FormSelect.Option key={i} value={s.id}>
              {s.name}
            </FormSelect.Option>
          ))}
        </FormSelect>
      </div>
      <Button onClick={() => navigate("create")}>
        <MdAdd size={18} />
        Tambah
      </Button>
    </div>
  );
};

export default TeachingAssignmentHeader;
