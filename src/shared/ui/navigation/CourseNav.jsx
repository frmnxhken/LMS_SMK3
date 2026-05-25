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
      roles: ["student", "teacher"],
    },
    {
      name: "Tugas",
      path: "assignment",
      roles: ["student", "teacher"],
    },
    {
      name: "Ujian",
      path: "exam",
      roles: ["student", "teacher"],
    },
    {
      name: "Anggota",
      path: "member",
      roles: ["student"],
    },
    {
      name: "Nilai",
      path: "report",
      roles: ["teacher"],
    },
  ];
  return (
    <div className="border-b border-app-border p-2 px-6 sticky top-18 z-20 bg-white">
      <ul className="flex justify-evenly sm:justify-start space-x-12">
        {menuCourse
          .filter((item) => item.roles.includes(user.role))
          .map((menu, index) => (
            <li key={index}>
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
      </ul>
    </div>
  );
};

export default CourseNav;
