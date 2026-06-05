import React, { useState } from "react";
import FormInput from "@/shared/ui/forms/FormInput";
import Button from "@/shared/ui/buttons/Button";
import { MdSearch, MdChevronLeft } from "react-icons/md";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import FormSelect from "@/shared/ui/forms/FormSelect";
import { useNavigate } from "react-router";

const AdminReportHistoryHeader = ({ onExportMonthly, onSearch }) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [filterMonth, setFilterMonth] = useState("");

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
      <div className="flex gap-2">
        <Button variant="outline" onClick={() => navigate(-1)}>
          <MdChevronLeft size={18} />
        </Button>
        <Button
          onClick={() => onExportMonthly(filterMonth)}
          variant="outline"
          className="flex items-center"
        >
          <PiMicrosoftExcelLogo size={18} />
          Export Bulan Ini
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full sm:w-auto">
        <FormSelect onChange={(e) => setFilterMonth(e.target.value)}>
          <FormSelect.Option value="">Pilih Bulan...</FormSelect.Option>
          <FormSelect.Option value="2026-06">Juni 2026</FormSelect.Option>
          <FormSelect.Option value="2026-05">Mei 2026</FormSelect.Option>
        </FormSelect>

        <FormInput type="date" />

        <div className="flex items-center w-full col-span-2 sm:col-span-1">
          <FormInput
            className="w-full"
            placeholder="Cari nama/NIS..."
            onChange={(e) => setKeyword(e.target.value)}
          />
          <Button variant="ghost" onClick={() => onSearch(keyword)}>
            <MdSearch size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminReportHistoryHeader;
