import { useAuth } from "@/app/contexts/AuthContext";
import React, { useState } from "react";
import {
  MdDashboard,
  MdAssignment,
  MdChevronLeft,
  MdChevronRight,
  MdCalendarMonth,
  MdChecklistRtl,
  MdSupervisedUserCircle,
  MdLogout,
  MdNewspaper,
  MdOutlineDoorBack,
  MdOutlineManageAccounts,
  MdCalendarViewMonth,
  MdDns,
  MdExpandMore,
} from "react-icons/md";
import { Link, useLocation } from "react-router";

const menuList = [
  {
    label: "Beranda",
    icon: MdDashboard,
    path: "/",
    roles: ["teacher", "student"],
  },
  {
    label: "Bank Soal",
    icon: MdDns,
    roles: ["teacher"],
    path: "/question-bank",
  },
  {
    label: "Tugas",
    icon: MdAssignment,
    path: "/task",
    roles: ["student"],
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
    label: "Dashboard",
    icon: MdDashboard,
    path: "/dashboard",
    roles: ["admin"],
  },
  {
    label: "Tahun Akademik",
    icon: MdCalendarViewMonth,
    path: "/dashboard/academic",
    roles: ["admin"],
  },
  {
    label: "Kelas",
    icon: MdOutlineDoorBack,
    path: "/dashboard/class",
    roles: ["admin"],
  },
  {
    label: "Data siswa",
    icon: MdSupervisedUserCircle,
    path: "/dashboard/student",
    roles: ["admin"],
  },
  {
    label: "Data Guru",
    icon: MdSupervisedUserCircle,
    path: "/dashboard/teacher",
    roles: ["admin"],
  },
  {
    label: "Mata Pelajaran",
    icon: MdNewspaper,
    path: "/dashboard/subject",
    roles: ["admin"],
  },
  {
    label: "Pengajaran",
    icon: MdOutlineManageAccounts,
    path: "/dashboard/teaching-assignment",
    roles: ["admin"],
  },
];

const Sidebar = ({ collapsed, onToggle, isMobileOpen, onNavigation }) => {
  const currentLocation = useLocation().pathname;
  const { user, logout } = useAuth();
  collapsed = isMobileOpen ? false : collapsed;
  const [openMenus, setOpenMenus] = useState({});

  const toggleSubMenu = (label) => {
    setOpenMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

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
        <ul className="space-y-2 px-2 overflow-y-auto">
          {menuList
            .filter((item) => item.roles.includes(user?.role))
            .map((menu) => {
              const Icon = menu.icon;
              const hasChildren = menu.children && menu.children.length > 0;
              const isOpen = openMenus[menu.label];

              return (
                <React.Fragment key={menu.label}>
                  <li
                    className={`
                      flex items-center justify-between rounded-lg px-3 py-2
                      cursor-pointer hover:bg-gray-100
                      ${collapsed ? "justify-center" : ""}
                      ${currentLocation === menu.path ? "bg-blue-50 text-blue-500" : "text-dark"}
                    `}
                    onClick={() =>
                      hasChildren && !collapsed
                        ? toggleSubMenu(menu.label)
                        : null
                    }
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="text-lg" />
                      {!collapsed &&
                        (hasChildren ? (
                          <span className="text-sm font-medium">
                            {menu.label}
                          </span>
                        ) : (
                          <Link
                            onClick={onNavigation}
                            to={menu.path}
                            className="text-sm font-medium"
                          >
                            {menu.label}
                          </Link>
                        ))}
                    </div>

                    {/* Icon Panah jika ada sub-menu */}
                    {!collapsed && hasChildren && (
                      <MdExpandMore
                        className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    )}
                  </li>

                  {!collapsed && hasChildren && isOpen && (
                    <ul className="ml-9 mt-1 space-y-1">
                      {menu.children.map((child) => (
                        <li key={child.path}>
                          <Link
                            to={child.path}
                            onClick={onNavigation}
                            className="block py-2 px-3 text-sm"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </React.Fragment>
              );
            })}

          <li
            onClick={logout}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 cursor-pointer hover:bg-gray-100
                    ${collapsed ? "justify-center" : ""}`}
          >
            <MdLogout className="text-lg text-dark" />
            {!collapsed && <p className="text-sm font-medium">Logout</p>}
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
