import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Button from "@/shared/ui/buttons/Button";

const TaskCalendarControl = ({ prevWeek, nextWeek }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <Button onClick={prevWeek} variant="outline">
        <MdChevronLeft size={20} />
      </Button>

      <Button onClick={nextWeek} variant="outline">
        <MdChevronRight size={20} />
      </Button>
    </div>
  );
};

export default TaskCalendarControl;
