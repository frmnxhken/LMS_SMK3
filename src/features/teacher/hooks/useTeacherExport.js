import { useMutation } from "@tanstack/react-query";
import { exportTeachers } from "../api/teacherApi";

const useTeacherExport = () => {
  const mutation = useMutation({
    mutationFn: exportTeachers,
    onSuccess: (blob) => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = "teachers.xlsx";

      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(url);
    },
  });

  const onExport = () => mutation.mutate();

  return { onExport };
};

export default useTeacherExport;
