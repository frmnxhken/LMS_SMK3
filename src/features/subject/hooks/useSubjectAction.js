import { useState } from "react";
import useSubjectCreate from "./useSubjectCreate";
import useSubjectUpdate from "./useSubjectUpdate";
import useSubjectDelete from "./useSubjectDelete";

const useSubjectAction = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const { handleSubmit, createErrors, isCreating, clearCreate } =
    useSubjectCreate();
  const { handleUpdate, updateErrors, isUpdating, clearUpdate } =
    useSubjectUpdate();
  const { handleDelete } = useSubjectDelete();

  const isPending = selectedData ? isUpdating : isCreating;
  const errors = selectedData ? updateErrors : createErrors;

  const onSubmit = (values, id) => {
    if (id) {
      handleUpdate(
        { values, id },
        {
          onSuccess: () => handleClose(),
        },
      );
    } else {
      handleSubmit(values, {
        onSuccess: () => handleClose(),
      });
    }
  };

  const handleClose = () => {
    clearCreate();
    clearUpdate();
    setIsOpen(false);
    setSelectedData(null);
  };

  const handleOpen = (data = null) => {
    setSelectedData(data);
    setIsOpen(true);
  };

  return {
    isOpen,
    isPending,
    selectedData,
    errors,
    actions: {
      onSubmit,
      onDelete: (id) => handleDelete(id),
      onEdit: (data) => handleOpen(data),
      handleOpen: () => handleOpen(),
      handleClose,
    },
  };
};

export default useSubjectAction;
