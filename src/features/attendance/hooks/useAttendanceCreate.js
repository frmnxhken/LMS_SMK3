import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAttendance } from "../api/attendanceApi";
import { useToast } from "@/app/contexts/ToastContext";

const useAttendanceCreate = () => {
  const { addToast } = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (payload) => createAttendance(payload),
    onSuccess: () => {
      queryClient.invalidateQueries["attendance"];
      addToast("Data berhasil ditambahkan!");
    },
    onError: (error) => {
      addToast(error.response?.data.message, "error");
    },
  });

  const handleSubmit = (values) => mutation.mutate(values);

  return { handleSubmit };
};

export default useAttendanceCreate;
