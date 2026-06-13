import React from "react";
import { useParams } from "react-router";
import { HiArrowLeft } from "react-icons/hi2";
import Button from "../ui/buttons/Button";
import { useAuth } from "@/app/contexts/AuthContext";

const AcademicStatusPage = () => {
  const { type } = useParams();
  const { logout } = useAuth();

  const handleClose = () => {
    logout();
    window.location.href = "/login";
  };

  const config = {
    draft: {
      title: "Halaman Sedang Disusun",
      description:
        "Data akademik ini masih dalam bentuk draf dan belum dipublikasikan. Silakan kembali nanti.",
      banner: "/draft.svg",
    },
    completed: {
      title: "Periode Tidak Aktif",
      description:
        "Halaman akademik ini tidak aktif untuk periode saat ini. Silakan hubungi admin jika ini adalah kesalahan.",
      banner: "/complete.svg",
    },
  };

  const statusConfig = config[type];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center bg-gray-50">
      <img
        src={statusConfig?.banner}
        alt="banner"
        className="w-1/2 sm:w-[30%]"
      />

      <h1 className="text-xl sm:text-3xl font-bold text-text-heading">
        {statusConfig.title}
      </h1>

      <p className="text-sm sm:text-md mt-4 font-medium max-w-md text-text-muted">
        {statusConfig.description}
      </p>

      <div className="mt-8">
        <Button size="lg" onClick={handleClose}>
          <HiArrowLeft className="mr-2" /> Kembali
        </Button>
      </div>
    </div>
  );
};

export default AcademicStatusPage;
