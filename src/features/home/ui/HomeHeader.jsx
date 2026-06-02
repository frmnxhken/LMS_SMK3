import React from "react";

const HomeHeader = ({ role }) => {
  return (
    <div className="mb-4">
      <h1 className="text-heading font-bold text-xl">Selamat Datang</h1>
      <p className="text-sm text-text-muted">
        {role === "student"
          ? "Siap belajar hal baru hari ini?"
          : "Siap membagikan hal baru hari ini?"}
      </p>
    </div>
  );
};

export default HomeHeader;
