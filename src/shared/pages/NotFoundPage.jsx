import React from "react";
import { useNavigate } from "react-router";
import { HiArrowLeft } from "react-icons/hi2";
import Button from "../ui/buttons/Button";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <h1 className="text-9xl font-extrabold text-text-muted animate-bounce">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-bold text-text-heading">
        Halaman tidak ditemukan
      </h2>
      <p className="mt-2 font-medium max-w-lg">
        Sepertinya kamu tersesat. Halaman yang kamu cari mungkin sudah
        dipindahkan, dihapus, atau tidak pernah ada.
      </p>

      <div className="mt-8">
        <Button size="lg" onClick={() => navigate(-1)}>
          <HiArrowLeft /> Kembali
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
