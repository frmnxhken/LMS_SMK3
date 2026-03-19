import { useAuth } from "@/app/contexts/AuthContext";
import React from "react";
import { Link, NavLink, useLocation } from "react-router";

const CourseNav = () => {
  const { user } = useAuth();
  const currentLocation = useLocation().pathname;
  const menuCourse = [
    {
      name: "Forum",
      path: "",
    },
    {
      name: "Tugas",
      path: "assignment",
    },
    {
      name: "Anggota",
      path: "member",
    },
  ];
  return (
    <div className="border-b border-app-border p-2 px-6 sticky top-18 z-20 bg-white">
      <ul className="flex justify-evenly sm:justify-start space-x-12">
        {menuCourse.map((menu, index) => (
          <li>
            <NavLink
              to={menu.path}
              end={menu.path === ""}
              className={({ isActive }) =>
                `text-sm ${isActive ? "text-primary font-bold" : "font-medium text-gray-600"}`
              }
            >
              {menu.name}
            </NavLink>
          </li>
        ))}
        {user.role === "teacher" && (
          <li>
            <Link
              to="report"
              className={`text-sm ${currentLocation.includes("report") ? "text-primary font-bold" : "font-medium"}`}
            >
              Nilai
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default CourseNav;
