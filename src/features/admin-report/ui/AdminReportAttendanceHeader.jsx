import React, { useState } from "react";
import FormInput from "@/shared/ui/forms/FormInput";
import Button from "@/shared/ui/buttons/Button";
import { MdSearch, MdHistory } from "react-icons/md";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import FormSelect from "@/shared/ui/forms/FormSelect";
import { useNavigate } from "react-router";
import useAdminReportToday from "../hooks/useAdminReportToday";

const AdminReportAttendanceHeader = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const { status, handleStatusChange, handleSearchChange } =
    useAdminReportToday();

  const onSearch = () => {
    handleSearchChange(keyword);
    setKeyword("");
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
      <div className="flex gap-2">
        <Button
          onClick={() => navigate("export")}
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
        <FormSelect
          value={status}
          onChange={(e) => handleStatusChange(e.target.value)}
        >
          <FormSelect.Option value="">Semua Status</FormSelect.Option>
          <FormSelect.Option value="present">Hadir</FormSelect.Option>
          <FormSelect.Option value="late">Terlambat</FormSelect.Option>
          <FormSelect.Option value="permission">Izin</FormSelect.Option>
          <FormSelect.Option value="sick">Sakit</FormSelect.Option>
          <FormSelect.Option value="alpha">Tidak Hadir</FormSelect.Option>
        </FormSelect>
        <div className="flex items-center w-full">
          <FormInput
            className="w-full"
            placeholder="Cari nama/NIS..."
            value={keyword}
            onInput={(e) => setKeyword(e.target.value)}
          />
          <Button size="md" variant="ghost" onClick={() => onSearch()}>
            <MdSearch size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminReportAttendanceHeader;
