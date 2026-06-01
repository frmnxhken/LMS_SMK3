import React, { useState } from "react";
import Button from "@/shared/ui/buttons/Button";
import Modal from "@/shared/ui/modal/Modal";
import EmptyState from "@/shared/ui/Feedback/EmptyState";
import useSubjectUpdate from "../hooks/useSubjectUpdate";
import useSubjectDelete from "../hooks/useSubjectDelete";
import SubjectForm from "./SubjectForm";
import SubjectTableSkeleton from "./skeletons/SubjectTableSkeleton";

const SubjectTable = ({ data, isLoading }) => {
  const [open, setOpen] = useState(false);
  const [oldData, setOldData] = useState(null);
  const [id, setId] = useState(null);
  const { handleUpdate, isUpdating, errors, clearErrors } =
    useSubjectUpdate(id);
  const { handleDelete } = useSubjectDelete();

  const onEdit = (currentData) => {
    setOldData(currentData);
    setId(currentData?.id);
    setOpen(!open);
  };

  const onDelete = (id) => {
    let confirmed = confirm("Anda yakin untuk dihapus ?");
    if (confirmed) handleDelete(id);
  };

  const handleCloseModal = () => {
    clearErrors();
    setOpen(false);
  };

  return (
    <>
      <Modal isOpen={open} onClose={handleCloseModal} title="Edit Mapel">
        <SubjectForm
          initData={oldData}
          onSubmit={handleUpdate}
          onPending={isUpdating}
          errors={errors}
          closeModal={handleCloseModal}
        />
      </Modal>

      <table className="table-custom">
        <thead className="">
          <tr>
            <th className="table-head-cell">No</th>
            <th className="table-head-cell">Nama Mapel</th>
            <th className="table-head-cell">Aksi</th>
          </tr>
        </thead>
        {isLoading && <SubjectTableSkeleton />}
        <tbody className="text-xs">
          {!isLoading && data.length === 0 ? (
            <tr className="table-body-row">
              <td colSpan={3}>
                <EmptyState />
              </td>
            </tr>
          ) : (
            data?.map((item, index) => (
              <tr className="table-body-row">
                <td className="table-body-cell">{index + 1}</td>
                <td className="table-body-cell">{item.name}</td>
                <td className="table-body-cell space-x-2">
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
    </>
  );
};

export default SubjectTable;
