import React from "react";
import { useNavigate, useParams } from "react-router";
import AssignmentCard from "../ui/AssignmentCard";
import AssignmentCardSkeleton from "../ui/skeletons/AssignmentCardSkeleton";
import useAssignmentList from "../hooks/useAssignmentList";
import { useAuth } from "@/app/contexts/AuthContext";
import Button from "@/shared/ui/buttons/Button";
import { MdAdd } from "react-icons/md";
import EmptyState from "@/shared/ui/Feedback/EmptyState";

export const AssignmentListPage = () => {
  const { user } = useAuth();
  const { id_class } = useParams();
  const { data, isLoading } = useAssignmentList(id_class);
  const navigate = useNavigate();

  return (
    <div className="max-w-[800px] container mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-heading font-bold text-md sm:text-xl">
          Daftar Tugas
        </h1>
        {user.role === "teacher" && (
          <div>
            <Button onClick={() => navigate("create")}>
              <MdAdd size={18} />
              Tambah
            </Button>
          </div>
        )}
      </div>
      <div className="space-y-2">
        {isLoading ? (
          <AssignmentCardSkeleton />
        ) : data?.[0].posts?.length === 0 ? (
          <EmptyState title="Belum Ada Tugas" />
        ) : (
          data?.[0].posts?.map((assignment, index) => (
            <AssignmentCard
              key={index}
              assignment={assignment}
              idClass={id_class}
            />
          ))
        )}
      </div>
    </div>
  );
};
