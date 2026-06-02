import { useState } from "react";
import useAcademicCreate from "./useAcademicCreate";
import useAcademicUpdate from "./useAcademicUpdate";
import useAcademicDelete from "./useAcademicDelete";

export const useAcademicAction = () => {
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const {
    handleSubmit,
    errors: createErrors,
    clearErrors: clearErrorCreate,
  } = useAcademicCreate();
  const {
    handleUpdate,
    errors: updateErrors,
    clearErrors: clearErrorUpdate,
  } = useAcademicUpdate();
  const { handleDelete } = useAcademicDelete();

  const handleEdit = (data) => {
    setSelectedData(data);
    setOpen(true);
  };

  const handleClose = () => {
    clearErrorUpdate();
    clearErrorCreate();
    setSelectedData(null);
    setOpen(false);
  };

  const handleOpenCreate = () => {
    setSelectedData(null);
    setOpen(true);
  };

  const onSubmitHandler = (values) => {
    if (selectedData) {
      handleUpdate(values, selectedData.id, {
        onSuccess: () => {
          handleClose();
        },
      });
    } else {
      handleSubmit(values, {
        onSuccess: () => {
          handleClose();
        },
      });
    }
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

export default useAcademicAction;
