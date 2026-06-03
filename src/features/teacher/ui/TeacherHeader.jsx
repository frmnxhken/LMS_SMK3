import React, { useState } from "react";
import { useNavigate } from "react-router";
import { MdAdd, MdSearch } from "react-icons/md";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import Button from "@/shared/ui/buttons/Button";
import FormInput from "@/shared/ui/forms/FormInput";
import useTeacherExport from "../hooks/useTeacherExport";
import useTeacher from "../hooks/useTeacher";

const TeacherHeader = ({ openModal }) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const { mutate: exportTeachers } = useTeacherExport();
  const { handleSearchChange } = useTeacher();

  const handleSearch = () => {
    handleSearchChange(keyword);
    setKeyword("");
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
      <div className="flex gap-2">
        <Button onClick={() => navigate("create")}>
          <MdAdd size={18} /> Tambah
        </Button>
        <Button
          onClick={() => openModal()}
          variant="outline"
          className="flex items-center"
        >
          <PiMicrosoftExcelLogo size={18} />
          Import
        </Button>
        <Button onClick={exportTeachers} variant="outline">
          <PiMicrosoftExcelLogo size={18} />
          Export
        </Button>
      </div>
      <div className="">
        <div className="flex items-center w-full">
          <FormInput
            onInput={(e) => setKeyword(e.target.value)}
            value={keyword}
            className="w-full"
            placeholder="Cari guru.."
          />
          <Button variant="ghost" onClick={handleSearch}>
            <MdSearch size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeacherHeader;
