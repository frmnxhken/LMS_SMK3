import React from "react";
import { IoClipboard, IoTimeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import { formatDateDMY } from "@/shared/lib/formatDate";
import Button from "@/shared/ui/buttons/Button";
import { useAuth } from "@/app/contexts/AuthContext";

const AssignmentCard = ({ id, title, due, created_at }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="bg-app-surface border border-app-border rounded-xl p-4 cursor-pointer hover:bg-app-bg">
      <div className="flex flex-col sm:flex-row items-start gap-4 justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full text-orange-600 bg-orange-50 transition-colors group-hover:bg-opacity-80">
            <IoClipboard size={24} />
          </div>

          <div className="flex flex-col">
            <Link className="text-sm sm:text-base font-semibold text-text-heading mt-1 group-hover:text-primary transition-colors">
              {title}
            </Link>

            <div className="flex items-center gap-x-4 text-[11px] text-text-muted mt-1">
              <div className="flex items-center">
                <IoTimeOutline />
                <span>{formatDateDMY(created_at)}</span>
              </div>
              -
              <div className="flex items-center">
                <IoTimeOutline />
                <span>{formatDateDMY(due)}</span>
              </div>
            </div>
          </div>
        </div>
        {user.role === "teacher" && (
          <Button onClick={() => navigate(`${id}/assessment`)}>
            Lihat Pengumpulan
          </Button>
        )}
      </div>
    </div>
  );
};

export default AssignmentCard;
