import { formatDateDMY } from "@/shared/lib/formatDate";
import Badge from "@/shared/ui/buttons/Badge";
import Button from "@/shared/ui/buttons/Button";
import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

const image =
  "https://cdn.idn.media/idnaccount/avatar/500/71e9df185dcc84e99ddf1dc97cc37467.webp?v=1768211620";
const AssesmentCard = ({ id, name, updated_at, score, status }) => {
  const navigate = useNavigate();

  return (
    <div className="border border-app-border p-6 rounded-xl">
      <div className="flex items-center gap-4">
        <img
          className="w-[50px] h-[50px] object-cover rounded-full"
          src={image}
          alt="profile"
        />
        <div>
          <h3 className="text-md font-semibold">{name}</h3>
          <div className="flex items-center gap-2">
            <IoTimeOutline size={18} />
            <span className="text-xs text-text-muted">
              {formatDateDMY(updated_at)}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6">
        {status === "graded" && (
          <span className="text-lg font-bold">{score}/100</span>
        )}
        {status === "pending" && (
          <Badge variant="dark" label="Belum mengumpulkan" />
        )}
        {status === "done" && <Badge variant="success" label="Belum dinilai" />}
        {status !== "pending" && (
          <Button onClick={() => navigate(`${id}`)}>Lihat</Button>
        )}
      </div>
    </div>
  );
};

export default AssesmentCard;
