import React from "react";
import WeightScoreForm from "../ui/WeightScoreForm";
import { useParams } from "react-router";
import useWeightScoreUpdate from "../hooks/useWeightScoreUpdate";

export const WeightScorePage = () => {
  const { id_class } = useParams();
  const { data, isLoading, handleUpdate, isUpdating, errors } =
    useWeightScoreUpdate(id_class);

  if (isLoading) return;

  return (
    <div className="container max-w-[680px] mx-auto p-6">
      <div className="border border-app-border p-4 rounded-xl">
        <h1 className="text-xl text-text-heading font-bold mb-4">
          Bobot Penilaian
        </h1>
        <WeightScoreForm
          initData={data}
          onSubmit={handleUpdate}
          onPending={isUpdating}
          errors={errors}
        />
      </div>
    </div>
  );
};
