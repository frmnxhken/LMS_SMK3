import Navbar from "@/shared/ui/navigation/Navbar";
import Sidebar from "@/shared/ui/navigation/Sidebar";
import React, { useState } from "react";
import { Outlet } from "react-router";

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileSidebar = () => setIsMobileOpen(!isMobileOpen);

  return (
    <div className="flex h-screen w-full">
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-[60] lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
        onNavigation={() => toggleMobileSidebar()}
        isMobileOpen={isMobileOpen}
      />

      <main className="flex-1 overflow-y-auto relative">
        <Navbar onMenuClick={() => toggleMobileSidebar()} />
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
