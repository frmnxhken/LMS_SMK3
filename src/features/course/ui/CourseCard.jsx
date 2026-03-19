import { courseVariantColors } from "@/shared/lib/Constants";
import React from "react";
import { IoArrowForward, IoPerson, IoLibrary } from "react-icons/io5";
import { Link } from "react-router";

const CourseCard = ({ id, subject, teacher, index }) => {
  const color = courseVariantColors[index % 5];
  return (
    <div className="bg-app-surface border border-app-border rounded-xl overflow-hidden transition-all duration-300">
      <div className="h-32 flex items-center p-4 relative overflow-hidden">
        <h3 className="text-lg font-semibold w-3/4 text-text-heading leading-tight mb-3 group-hover:text-primary transition-colors">
          {subject}
        </h3>
        <IoLibrary
          className={`${color} text-7xl absolute -bottom-4 -right-4 rotate-12`}
        />
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 text-text-body text-xs">
          <IoPerson />
          <span>{teacher}</span>
        </div>

        <Link
          to={"/course/" + id}
          className="w-full mt-5 bg-app-bg hover:bg-primary hover:text-white text-primary text-sm font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all"
        >
          Mulai Belajar <IoArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
