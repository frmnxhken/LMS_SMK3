import React, { useState } from "react";
import StudentTable from "../ui/StudentTable";
import FormInput from "@/shared/ui/forms/FormInput";
import Button from "@/shared/ui/buttons/Button";
import { MdSearch } from "react-icons/md";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { useNavigate } from "react-router";
import useStudent from "../hooks/useStudent";

const StudentPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { data } = useStudent();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-xl font-bold text-text-heading mb-2">Daftar Siswa</h1>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div className="flex gap-2">
          <Button onClick={() => navigate("create")}>Tambah</Button>
          <Button variant="success" className="flex items-center">
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

      <div className="table-responsive mt-4">
        <StudentTable students={data} />
      </div>
    </div>
  );
};

export default StudentPage;
