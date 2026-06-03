import { BASE_IMAGE_PROFILE } from "@/shared/lib/Constants";
import { formatDateDMY } from "@/shared/lib/formatDate";
import Badge from "@/shared/ui/Feedback/Badge";
import Button from "@/shared/ui/buttons/Button";
import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

const AssesmentCard = ({ id, name, photo, updated_at, score, status }) => {
  const navigate = useNavigate();

  return (
    <div className="border border-app-border p-6 rounded-xl">
      <div className="flex items-center gap-4">
        <img
          className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] object-cover rounded-full"
          src={BASE_IMAGE_PROFILE + photo}
          alt="profile"
        />
        <div>
          <h3 className="text-sm sm:text-md font-semibold">{name}</h3>
          <div className="flex items-center gap-2 text-text-muted">
            <IoTimeOutline size={14} />
            <span className="text-xs">{formatDateDMY(updated_at)}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6">
        {status === "graded" && (
          <span className="text-md sm:text-lg font-bold">{score}/100</span>
        )}
        {status === "pending" && <Badge label="Belum mengumpulkan" />}
        {status === "done" && <Badge variant="success" label="Belum dinilai" />}
        {status !== "pending" && (
          <Button onClick={() => navigate(`${id}`)}>Lihat</Button>
        )}
      </div>
    </div>
  );
};

export default AssesmentCard;
