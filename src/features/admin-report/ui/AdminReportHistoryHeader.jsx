import React, { useState } from "react";
import FormInput from "@/shared/ui/forms/FormInput";
import Button from "@/shared/ui/buttons/Button";
import { MdSearch, MdChevronLeft } from "react-icons/md";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import FormSelect from "@/shared/ui/forms/FormSelect";
import { useNavigate } from "react-router";
import useAdminReportHistory from "../hooks/useAdminReportHistory";

const AdminReportHistoryHeader = ({ onExportMonthly }) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const {
    status,
    handleStatusChange,
    handleDateRangeChange,
    handleSearchChange,
  } = useAdminReportHistory();

  const onSearch = () => {
    handleSearchChange(keyword);
    setKeyword("");
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={() => navigate("/dashboard/attendance/")}
        >
          <MdChevronLeft size={18} />
        </Button>
        <Button
          onClick={() => onExportMonthly(filterMonth)}
          variant="outline"
          className="flex items-center"
        >
          <PiMicrosoftExcelLogo size={18} />
          Export
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full sm:w-auto">
        <div className="flex col-span-2">
          <div className="flex items-center gap-2">
            <FormInput
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            -
            <FormInput
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <Button
            variant="outline"
            onClick={() => handleDateRangeChange(startDate, endDate)}
          >
            Filter
          </Button>
        </div>

        <FormSelect
          value={status}
          onChange={(e) => handleStatusChange(e.target.value)}
        >
          <FormSelect.Option value="">Semua Status</FormSelect.Option>
          <FormSelect.Option value="present">Hadir</FormSelect.Option>
          <FormSelect.Option value="late">Terlambat</FormSelect.Option>
          <FormSelect.Option value="permission">Izin</FormSelect.Option>
          <FormSelect.Option value="sick">Sakit</FormSelect.Option>
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

export default AdminReportHistoryHeader;
