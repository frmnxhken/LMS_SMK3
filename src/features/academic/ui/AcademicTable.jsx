import React from "react";
import Badge from "@/shared/ui/Feedback/Badge";
import Button from "@/shared/ui/buttons/Button";
import useAcademicActivate from "../hooks/useAcademicActivate";
import AcademicTableSkeleton from "./skeletons/AcademicTableSkeleton";
import EmptyState from "@/shared/ui/Feedback/EmptyState";
import { MdDelete, MdEdit } from "react-icons/md";
import { useAcademicStatus } from "../hooks/useAcademicStatus";

const AcademicTable = ({ academies, onEdit, onDelete, isLoading }) => {
  const { handleActivate } = useAcademicActivate();
  const { handleStatus } = useAcademicStatus();

  return (
    <table className="table-custom">
      <thead className="">
        <tr>
          <th className="table-head-cell">No</th>
          <th className="table-head-cell">Tahun Ajaran</th>
          <th className="table-head-cell">Masa Berlaku</th>
          <th className="table-head-cell">Tahun Aktif</th>
          <th className="table-head-cell">Status</th>
          <th className="table-head-cell">Aksi</th>
        </tr>
      </thead>
      {isLoading && <AcademicTableSkeleton />}
      <tbody className="text-xs">
        {!isLoading && academies?.length === 0 ? (
          <tr className="table-body-row">
            <td className="table-body-cell" colSpan={5}>
              <EmptyState />
            </td>
          </tr>
        ) : (
          academies?.data?.map((item, index) => (
            <tr className="table-body-row">
              <td className="table-body-cell">{index + 1}</td>
              <td className="table-body-cell">
                {item.start.split("-")[0]}/{item.end.split("-")[0]}
              </td>
              <td className="table-body-cell">
                {item.start.replaceAll("-", "/")} -
                {item.end.replaceAll("-", "/")}
              </td>
              <td className="table-body-cell">
                <Badge
                  variant={item.is_active === 1 ? "success" : "primary"}
                  label={item.is_active === 1 ? "aktif" : "tidak aktif"}
                />
              </td>
              <td>
                <Badge
                  variant={item.status === "active" ? "success" : "primary"}
                  label={item.status}
                />
              </td>
              <td className="table-body-cell flex items-center justify-between gap-2">
                <select
                  value={item.status}
                  onChange={(e) => handleStatus(item.id, e.target.value)}
                >
                  <option value="draft">Draft</option>
                  <option value="active">Active</option>
                  <option value="completed">Completed</option>
                </select>
                <div>
                  {item.is_active === 0 ? (
                    <Button
                      onClick={() => handleActivate(item.id)}
                      variant="ghost"
                      className="text-emerald-600 hover:!bg-emerald-50 !hover:text-emerald-700"
                    >
                      Aktifkan
                    </Button>
                  ) : (
                    <div />
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="table" onClick={() => onEdit(item)}>
                    <MdEdit size={18} />
                  </Button>
                  <Button variant="table" onClick={() => onDelete(item.id)}>
                    <MdDelete size={18} />
                  </Button>
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default AcademicTable;
