import React, { useState } from "react";
import FormInput from "@/shared/ui/forms/FormInput";
import Button from "@/shared/ui/buttons/Button";
import { MdSearch, MdHistory } from "react-icons/md";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import FormSelect from "@/shared/ui/forms/FormSelect";
import { useNavigate } from "react-router";

const AdminReportAttendanceHeader = ({ onExport, onSearch }) => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
      <div className="flex gap-2">
        <Button
          onClick={onExport}
          variant="outline"
          className="flex items-center"
        >
          <PiMicrosoftExcelLogo size={18} />
          Export
        </Button>

        <Button variant="outline" onClick={() => navigate("history")}>
          <MdHistory size={18} />
          Lihat Riwayat
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full sm:w-auto">
        <FormSelect>
          <FormSelect.Option value="">Semua Status</FormSelect.Option>
          <FormSelect.Option value="hadir">Hadir</FormSelect.Option>
          <FormSelect.Option value="terlambat">Terlambat</FormSelect.Option>
          <FormSelect.Option value="izin">Izin</FormSelect.Option>
          <FormSelect.Option value="sakit">Sakit</FormSelect.Option>
        </FormSelect>
        <div className="flex items-center w-full">
          <FormInput
            className="w-full"
            placeholder="Cari nama/NIS..."
            onChange={(e) => setKeyword(e.target.value)}
          />
          <Button size="md" variant="ghost" onClick={() => onSearch(keyword)}>
            <MdSearch size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminReportAttendanceHeader;
