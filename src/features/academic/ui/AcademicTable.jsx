import React from "react";
import Badge from "@/shared/ui/Feedback/Badge";
import Button from "@/shared/ui/buttons/Button";
import useAcademicActivate from "../hooks/useAcademicActivate";
import AcademicTableSkeleton from "./skeletons/AcademicTableSkeleton";
import EmptyState from "@/shared/ui/Feedback/EmptyState";

const AcademicTable = ({ academies, onEdit, onDelete, isLoading }) => {
  const { handleActivate } = useAcademicActivate();

  return (
    <table className="table-custom">
      <thead className="">
        <tr>
          <th className="table-head-cell">No</th>
          <th className="table-head-cell">Tahun Mulai Akademik</th>
          <th className="table-head-cell">Tahun Akhir Akademik</th>
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
              <td className="table-body-cell">{item.start}</td>
              <td className="table-body-cell">{item.end}</td>
              <td className="table-body-cell">
                <Badge
                  variant={item.is_active === 1 ? "success" : "dark"}
                  label={item.is_active === 1 ? "aktif" : "tidak aktif"}
                />
              </td>
              <td className="table-body-cell flex space-x-2">
                {item.is_active === 0 && (
                  <Button
                    onClick={() => handleActivate(item.id)}
                    variant="success"
                  >
                    Aktifkan
                  </Button>
                )}
                <Button onClick={() => onEdit(item)}>Edit</Button>
                <Button onClick={() => onDelete(item.id)} variant="outline">
                  Delete
                </Button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default AcademicTable;
