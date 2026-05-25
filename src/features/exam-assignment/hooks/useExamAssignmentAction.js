import { useState } from "react";
import useExamAssignmentCreate from "./useExamAssignmentCreate";
import useExamAssignmentUpdate from "./useExamAssignmentUpdate";
import useExamAssignmentDelete from "./useExamAssignmentDelete";

export const useExamAssignmentAction = (id_class) => {
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const { handleSubmit: handleCreate, errors: createErrors } =
    useExamAssignmentCreate(id_class);
  const { handleSubmit: handleUpdate, errors: updateErrors } =
    useExamAssignmentUpdate(id_class);
  const { handleDelete } = useExamAssignmentDelete(id_class);

  const handleEdit = (data) => {
    setSelectedData(data);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedData(null);
    setOpen(false);
  };

  const handleOpenCreate = () => {
    setSelectedData(null);
    setOpen(true);
  };

  const onSubmitHandler = (values) => {
    if (selectedData) {
      handleUpdate(values, selectedData.id);
    } else {
      handleCreate(values);
    }
    handleClose();
  };

  const onDelete = (id) => {
    handleDelete(id);
  };

  const errors = selectedData ? updateErrors : createErrors;

  return {
    isOpen: open,
    selectedData,
    errors,
    handleEdit,
    handleClose,
    handleOpenCreate,
    onSubmitHandler,
    onDelete,
  };
};

export default useExamAssignmentAction;
