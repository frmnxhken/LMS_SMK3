import React from "react";
import Button from "@/shared/ui/buttons/Button";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const AcademicCalendarNav = ({ prevMonth, nextMonth, monthName }) => {
  return (
    <div className="flex justify-between items-center py-4">
      <Button variant="outline" onClick={prevMonth}>
        <MdChevronLeft size={18} />
      </Button>
      <h2 className="text-lg font-semibold text-text-heading text-center capitalize">
        {monthName}
      </h2>
      <Button variant="outline" onClick={nextMonth}>
        <MdChevronRight size={18} />
      </Button>
    </div>
  );
};

export default AcademicCalendarNav;
