import React from "react";
import MaterialForm from "../ui/MaterialForm";
import { useParams } from "react-router";
import useMaterialCreate from "../hooks/useMaterialCreate";

const MaterialCreatePage = () => {
  const { id_class } = useParams();
  const { handleSubmit, isLoading, errors } = useMaterialCreate(id_class);

  return (
    <div className="container max-w-[780px] p-6 mx-auto">
      <div className="border border-app-border p-4 rounded-xl">
        <MaterialForm errors={errors} onSubmit={(data) => handleSubmit(data)} />
      </div>
    </div>
  );
};

export default MaterialCreatePage;
