import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/app/contexts/ToastContext";
import { updateAttendance } from "../api/adminReportApi";

const useAdminReportUpsert = () => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const { addToast } = useToast();

  const mutation = useMutation({
    mutationFn: (payload) => updateAttendance(payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["attendanceToday"]);
      addToast("Data berhasil diperbarui!");
    },
    onError: (error) => {
      setErrors(error.response?.data?.errors);
    },
  });

  const handleUpdate = (values, options) => mutation.mutate(values, options);

  const clearErrors = () => setErrors(null);

  const handleClose = () => {
    setSelectedData(null);
    clearErrors();
  };

  const onEdit = (data) => setSelectedData(data);

  return {
    handleUpdate,
    handleClose,
    isUpdating: mutation.isPending,
    errors,
    selectedData,
    onEdit,
  };
};

export default useAdminReportUpsert;
