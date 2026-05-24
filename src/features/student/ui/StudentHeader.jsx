import React from "react";
import { useNavigate } from "react-router";
import FormInput from "@/shared/ui/forms/FormInput";
import Button from "@/shared/ui/buttons/Button";
import { MdSearch } from "react-icons/md";
import { PiMicrosoftExcelLogo } from "react-icons/pi";

const StudentHeader = ({ open, setOpen }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
      <div className="flex gap-2">
        <Button onClick={() => navigate("create")}>Tambah</Button>
        <Button
          onClick={() => setOpen(!open)}
          variant="success"
          className="flex items-center"
        >
          <PiMicrosoftExcelLogo />
          Import
        </Button>
        <Button variant="danger" className="flex items-center">
          <PiMicrosoftExcelLogo />
          Export
        </Button>
      </div>
      <div className="flex gap-4">
        <select className="border border-app-border rounded-md px-4 py-1">
          <option value="">Pilih Kelas</option>
          <option value="">X RPL 3</option>
          <option value="">X RPL 2</option>
          <option value="">X RPL 1</option>
        </select>
        <div className="flex">
          <FormInput placeholder="Cari siswa.." />
          <Button>
            <MdSearch size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StudentHeader;
