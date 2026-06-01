import React, { useState } from "react";
import { useNavigate } from "react-router";
import { MdSearch } from "react-icons/md";
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
        <Button onClick={() => navigate("create")}>Tambah</Button>
        <Button
          onClick={() => openModal()}
          variant="success"
          className="flex items-center"
        >
          <PiMicrosoftExcelLogo />
          Import
        </Button>
        <Button
          onClick={exportTeachers}
          variant="danger"
          className="flex items-center"
        >
          <PiMicrosoftExcelLogo />
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
          <Button onClick={handleSearch}>
            <MdSearch size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeacherHeader;
