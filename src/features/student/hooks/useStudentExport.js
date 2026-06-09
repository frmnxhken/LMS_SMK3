import { useMutation } from "@tanstack/react-query";
import { exportStudents } from "../api/studentApi";

const useStudentExport = () => {
  const mutation = useMutation({
    mutationFn: (id) => exportStudents(id),

    onSuccess: (blob) => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = "students.xlsx";

      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(url);
    },
  });

  const handleExport = (id) => mutation.mutate(id);

  return {
    handleExport,
    isExporting: mutation.isPending,
  };
};

export default useStudentExport;
