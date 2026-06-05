import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateAcademicCalendar } from "../api/academicCalendarApi";
import { useToast } from "@/app/contexts/ToastContext";

const useAcademicCalendarUpdate = () => {
  const [errors, setErrors] = useState(null);
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  const mutation = useMutation({
    mutationFn: ({ id, payload }) => updateAcademicCalendar(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["calendar"]);
      addToast("Data berhasil diperbarui!");
    },
    onError: (error) => {
      setErrors(error.response?.data?.errors);
    },
  });

  const handleUpdate = (id, values, options) => {
    mutation.mutate({ id, payload: values }, options);
  };

  const clearErrors = () => setErrors(null);

  return {
    handleUpdate,
    isUpdating: mutation.isPending,
    errors,
    clearErrors,
  };
};

export default useAcademicCalendarUpdate;
