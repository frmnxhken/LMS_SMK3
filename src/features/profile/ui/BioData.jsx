import React from "react";
import Button from "@/shared/ui/buttons/Button";
import { InformationProfile } from "@/shared/lib/Constants";
import profileDummy from "@/shared/data/dummy/profile.json";
import { useNavigate } from "react-router";

const BioData = ({ data }) => {
  const profileMap = InformationProfile[data.role];
  const profile = profileDummy[data.role];
  const navigate = useNavigate();

  return (
    <div className="rounded-xl border border-app-border">
      <div className="p-6 flex justify-between items-center">
        <h2 className="text-lg font-bold text-text-heading">
          Informasi Pribadi
        </h2>
        <Button onClick={() => navigate("change-password")}>
          Ubah Password
        </Button>
      </div>

      <div className="p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {Object.entries(profileMap).map(([key, value]) => (
            <div key={key} className="space-y-1">
              <p className="text-xs font-semibold text-text-muted uppercase">
                {value}
              </p>
              <p className="text-base font-semibold text-slate-700">
                {profile[key]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BioData;
