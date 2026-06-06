import { useMutation } from "@tanstack/react-query";
import { createAttendance } from "../api/attendanceApi";

const useAttendanceCreate = () => {
  const mutation = useMutation({
    mutationFn: (payload) => createAttendance(payload),
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmit = (values) => mutation.mutate(values);

  return { handleSubmit };
};

export default useAttendanceCreate;
