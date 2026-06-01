import { useMutation } from "@tanstack/react-query";
import { exportStudents } from "../api/studentApi";

const useStudentExport = () => {
  return useMutation({
    mutationFn: exportStudents,

    onSuccess: (blob, schoolClassId) => {
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;

      link.download = schoolClassId
        ? `students-class-${schoolClassId}.xlsx`
        : "students.xlsx";

      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(url);
    },
  });
};

export default useStudentExport;
