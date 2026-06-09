import { useState } from "react";
import useStudentExport from "./useStudentExport";
import useStudentImport from "./useStudentImport";

const useStudentAction = () => {
  const [isOpen, setIsOpen] = useState(null);

  const { handleExport, isExporting } = useStudentExport();
  const { handleImport, isImporting, errors, clearErrors } = useStudentImport();

  const handleClose = () => {
    clearErrors();
    setIsOpen(false);
  };

  const handleOpen = (type) => setIsOpen(type);

  return {
    isOpen,
    isExporting,
    isImporting,
    errors,
    actions: {
      handleExport,
      handleOpen,
      handleClose,
      handleImport,
    },
  };
};

export default useStudentAction;
