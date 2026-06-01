import React, { useState } from "react";
import { useNavigate } from "react-router";
import FormInput from "@/shared/ui/forms/FormInput";
import Button from "@/shared/ui/buttons/Button";
import { MdSearch } from "react-icons/md";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import useClass from "@/features/class/hooks/useClass";
import FormSelect from "@/shared/ui/forms/FormSelect";
import useStudent from "../hooks/useStudent";

const StudentHeader = ({
  openImport,
  setOpenImport,
  openExport,
  setOpenExport,
}) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const { filter, handleFilterChange, handleSearchChange } = useStudent();
  const { data: classes } = useClass();

  const handleSearch = () => {
    handleSearchChange(keyword);
    setKeyword("");
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
      <div className="flex gap-2">
        <Button onClick={() => navigate("create")}>Tambah</Button>
        <Button
          onClick={() => setOpenImport(!openImport)}
          variant="success"
          className="flex items-center"
        >
          <PiMicrosoftExcelLogo />
          Import
        </Button>
        <Button
          onClick={() => setOpenExport(!openExport)}
          variant="danger"
          className="flex items-center"
        >
          <PiMicrosoftExcelLogo />
          Export
        </Button>
      </div>
      <div className="flex gap-4">
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
        <div className="flex">
          <FormInput
            onInput={(e) => setKeyword(e.target.value)}
            placeholder="Cari siswa.."
          />
          <Button onClick={handleSearch}>
            <MdSearch size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StudentHeader;
