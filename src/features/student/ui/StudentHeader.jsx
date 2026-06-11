import React, { useState } from "react";
import { useNavigate } from "react-router";
import FormInput from "@/shared/ui/forms/FormInput";
import Button from "@/shared/ui/buttons/Button";
import { MdAdd, MdSearch } from "react-icons/md";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import FormSelect from "@/shared/ui/forms/FormSelect";
import useStudent from "../hooks/useStudent";

const StudentHeader = ({ classes, handleOpen, status }) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const { filter, handleFilterChange, handleSearchChange } = useStudent();

  const handleSearch = () => {
    handleSearchChange(keyword);
    setKeyword("");
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
      <div className="flex gap-2">
        {status === "completed" ? (
          <></>
        ) : (
          <>
            <Button
              disabled={status !== "draft"}
              onClick={() => navigate("create")}
            >
              <MdAdd size={18} />
              Tambah
            </Button>
            <Button
              disabled={status !== "draft"}
              onClick={() => handleOpen("import")}
              variant="outline"
              className="flex items-center"
            >
              <PiMicrosoftExcelLogo size={18} />
              Import
            </Button>
          </>
        )}

        <Button
          onClick={() => handleOpen("export")}
          variant="outline"
          className="flex items-center"
        >
          <PiMicrosoftExcelLogo size={18} />
          Export
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        <FormSelect
          id="class-select"
          value={filter}
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          <FormSelect.Option value="" disabled>
            Pilih Kelas...
          </FormSelect.Option>

          <FormSelect.Option value="">Semua Kelas</FormSelect.Option>

          {classes?.map((c, i) => (
            <FormSelect.Option key={i} value={c.id}>
              {`${c.level} ${c.major} ${c.section}`}
            </FormSelect.Option>
          ))}
        </FormSelect>
        <div className="flex items-center w-full">
          <FormInput
            className="w-full"
            onInput={(e) => setKeyword(e.target.value)}
            placeholder="Cari siswa.."
          />
          <Button variant="ghost" onClick={handleSearch}>
            <MdSearch size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StudentHeader;
