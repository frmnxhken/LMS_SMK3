import React from "react";
import SettingSchoolForm from "../ui/SettingSchoolForm";
import useSettingUpsert from "../hooks/useSettingUpsert";
import SettingSchoolFormSkeleton from "../ui/skeletons/SettingSchoolFormSkeleton";

const SettingSchoolPage = () => {
  const { isLoading, data, handleUpsert, isUpsert, errors } =
    useSettingUpsert();

  return (
    <div className="max-w-[600px] mx-auto p-6">
      <div className="border border-app-border p-4 rounded-md">
        <h1 className="text-lg sm:text-xl font-bold text-text-heading mb-4">
          Pengaturan Sekolah
        </h1>
        {isLoading ? (
          <SettingSchoolFormSkeleton />
        ) : (
          <SettingSchoolForm
            initData={data}
            onSubmit={handleUpsert}
            isPending={isUpsert}
            errors={errors}
          />
        )}
      </div>
    </div>
  );
};

export default SettingSchoolPage;
