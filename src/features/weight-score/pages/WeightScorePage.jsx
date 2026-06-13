import React from "react";
import WeightScoreForm from "../ui/WeightScoreForm";
import { useNavigate, useParams } from "react-router";
import useWeightScoreUpdate from "../hooks/useWeightScoreUpdate";
import WeightScoreFormSkeleton from "../ui/skeletons/WeightScoreFormSkeleton";
import { MdChevronLeft } from "react-icons/md";
import Button from "@/shared/ui/buttons/Button";

export const WeightScorePage = () => {
  const navigate = useNavigate();
  const { id_class } = useParams();
  const { data, isLoading, handleUpdate, isUpdating, errors } =
    useWeightScoreUpdate(id_class);

  return (
    <div className="container max-w-[680px] mx-auto p-6">
      <div className="flex items-center gap-2 mb-4">
        <Button onClick={() => navigate(-1)} variant="outline">
          <MdChevronLeft size={18} />
        </Button>
        <h1 className="text-md sm:text-xl text-text-heading font-bold">
          Bobot Penilaian
        </h1>
      </div>
      <div className="border border-app-border p-4 rounded-xl">
        {isLoading ? (
          <WeightScoreFormSkeleton />
        ) : (
          <WeightScoreForm
            initData={data}
            onSubmit={handleUpdate}
            isPending={isUpdating}
            errors={errors}
          />
        )}
      </div>
    </div>
  );
};
