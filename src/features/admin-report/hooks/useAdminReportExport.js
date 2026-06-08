import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { exportAttendance } from "../api/adminReportApi";
import { useToast } from "@/app/contexts/ToastContext";

const useAdminReportExport = () => {
  const [errors, setErrors] = useState(null);
  const { addToast } = useToast();

  const mutation = useMutation({
    mutationFn: (payload) => exportAttendance(payload),
    onSuccess: (blob) => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "students.xlsx";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

      addToast("Data berhasil di export!");
    },
    onError: async (error) => {
      const text = await error.response.data.text();
      const json = JSON.parse(text);
      setErrors(json?.errors);
    },
  });

  const handleExport = (values) => mutation.mutate(values);

  return {
    handleExport,
    isExporting: mutation.isPending,
    errors,
  };
};

export default useAdminReportExport;
