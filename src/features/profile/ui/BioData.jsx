import React from "react";
import Button from "@/shared/ui/buttons/Button";
import { getInformationProfile } from "@/shared/lib/ProfileMapping";
import { useNavigate } from "react-router";

const BioData = ({ data }) => {
  const navigate = useNavigate();
  const profileMap = getInformationProfile(data)[data?.role] || [];

  return (
    <div className="rounded-xl border border-app-border">
      <div className="p-6 flex justify-between items-center">
        <h2 className="text-sm sm:text-lg font-bold text-text-heading">
          Informasi Pribadi
        </h2>
        <Button onClick={() => navigate("change-password")}>
          Ubah Password
        </Button>
      </div>

      <div className="p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {profileMap.map((row, index) => (
            <div key={index} className="space-y-1">
              <p className="text-xs font-semibold text-text-muted uppercase">
                {row.label}
              </p>
              <p className="text-sm font-semibold text-slate-700">
                {row.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BioData;
