import Button from "@/shared/ui/buttons/Button";
import Modal from "@/shared/ui/modal/Modal";
import React, { useState } from "react";
import useSubjectUpdate from "../hooks/useSubjectUpdate";
import useSubjectDelete from "../hooks/useSubjectDelete";
import SubjectForm from "./SubjectForm";

const SubjectTable = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [oldData, setOldData] = useState(null);
  const [id, setId] = useState(null);
  const { handleSubmit: handleUpdate } = useSubjectUpdate(id);
  const { handleSubmit: handleDestroy } = useSubjectDelete(id);

  const handleEdit = (currentData) => {
    setOldData(currentData);
    setId(currentData?.id);
    setOpen(!open);
  };

  const handleDelete = (currentId) => {
    setId(currentId);
    let confirmed = confirm("Anda yakin untuk dihapus ?");
    if (confirmed) handleDestroy();
  };

  return (
    <>
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Edit Mapel">
        <SubjectForm
          initData={oldData}
          onSubmit={handleUpdate}
          closeModal={() => setOpen(false)}
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
        <tbody className="text-xs">
          {data?.map((item, index) => (
            <tr className="table-body-row">
              <td className="table-body-cell">{index + 1}</td>
              <td className="table-body-cell">{item.name}</td>
              <td className="table-body-cell space-x-2">
                <Button onClick={() => handleEdit(item)}>Edit</Button>
                <Button onClick={() => handleDelete(item.id)} variant="outline">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SubjectTable;
