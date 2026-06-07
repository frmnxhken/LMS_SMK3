import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateAttendance } from "../api/adminReportApi";
import { useToast } from "@/app/contexts/ToastContext";

const useAdminReportUpsert = () => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState(null);
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

  const handleUpdate = (values, options) => {
    mutation.mutate(values, options);
  };

  const clearErrors = () => setErrors(null);

  return {
    handleUpdate,
    isUpdating: mutation.isPending,
    errors,
    clearErrors,
  };
};

export default useAdminReportUpsert;
