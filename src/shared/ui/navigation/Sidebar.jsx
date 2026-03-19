import { useAuth } from "@/app/contexts/AuthContext";
import React from "react";
import {
  MdDashboard,
  MdAssignment,
  MdChevronLeft,
  MdChevronRight,
  MdCalendarMonth,
  MdChecklist,
  MdChecklistRtl,
  MdSupervisedUserCircle,
} from "react-icons/md";
import { Link, useLocation } from "react-router";

// const menuList = [
//   { label: "Beranda", icon: MdDashboard, path: "/" },
//   { label: "Materi", icon: MdMenuBook, path: "/material" },
//   { label: "Penilaian", icon: MdAssignment, path: "/assesment" },
//   { label: "Laporan", icon: MdBarChart, path: "/report" },
// ];
const menuList = [
  {
    label: "Beranda",
    icon: MdDashboard,
    path: "/",
    roles: ["teacher", "student"],
  },
  {
    label: "Tugas",
    icon: MdAssignment,
    path: "/task",
    roles: ["teacher", "student"],
  },
  {
    label: "Kalender",
    icon: MdCalendarMonth,
    path: "/calendar",
    roles: ["student"],
  },
  {
    label: "Absensi",
    icon: MdChecklistRtl,
    path: "/attendance",
    roles: ["student"],
  },
  {
    label: "Data siswa",
    icon: MdSupervisedUserCircle,
    path: "/student",
    roles: ["admin"],
  },
  {
    label: "Data Guru",
    icon: MdSupervisedUserCircle,
    path: "/teacher",
    roles: ["admin"],
  },
];

const Sidebar = ({ collapsed, onToggle, isMobileOpen, onNavigation }) => {
  const currentLocation = useLocation().pathname;
  const { user } = useAuth();
  collapsed = isMobileOpen ? false : collapsed;

  return (
    <aside
      className={`
          fixed inset-y-0 left-0 z-[70] bg-white border-r border-app-border
          transition-all duration-300 ease-in-out
          lg:relative lg:translate-x-0 
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          ${collapsed ? "lg:w-20" : "lg:w-64"}
          w-64 flex-shrink-0
        `}
    >
      <div className="flex h-full flex-col py-4">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between px-4">
          <div className="flex items-center">
            <img
              className="w-[30px] h-[30px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhhyL6uTIzvrIJA5mrxToy30u7NGPS7RUzNQ&s"
              alt="logo"
            />
            {!collapsed && <h1 className="text-xl font-semibold">Elearning</h1>}
          </div>

          <button
            onClick={onToggle}
            className="hidden sm:block rounded-lg py-2 px-4 hover:bg-gray-200"
          >
            {collapsed ? (
              <MdChevronRight className="text-xl" />
            ) : (
              <MdChevronLeft className="text-xl" />
            )}
          </button>
        </div>

        {/* Menu */}
        <ul className="space-y-4 px-2">
          {menuList
            .filter((item) => item.roles.includes(user?.role))
            .map((menu) => {
              const Icon = menu.icon;

              return (
                <li
                  key={menu.label}
                  title={collapsed ? menu.label : undefined}
                  className={`
                    flex items-center gap-3 rounded-lg px-3 py-2
                    cursor-pointer hover:bg-gray-100
                    ${collapsed ? "justify-center" : ""}
                    `}
                >
                  <Icon
                    className={`text-lg ${currentLocation === menu.path ? "text-blue-500" : "text-dark"}`}
                  />
                  {!collapsed && (
                    <Link
                      onClick={onNavigation}
                      to={menu.path}
                      className={`text-sm font-medium ${currentLocation === menu.path ? "text-blue-500" : "text-dark"}`}
                    >
                      {menu.label}
                    </Link>
                  )}
                </li>
              );
            })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
