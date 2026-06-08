import { useMutation } from "@tanstack/react-query";
import { exportReportStudent } from "../api/teacherReportApi";

const useTeacherReportExport = () => {
  const mutation = useMutation({
    mutationFn: (id_class) => exportReportStudent(id_class),
    onSuccess: (blob) => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = "nilai.xlsx";

      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(url);
    },
  });

  const handleExport = (id_class) => mutation.mutate(id_class);

  return { handleExport };
};

export default useTeacherReportExport;
