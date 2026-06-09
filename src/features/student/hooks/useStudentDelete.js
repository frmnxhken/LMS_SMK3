import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/app/contexts/ToastContext";
import { deleteStudent } from "../api/studentApi";

const useStudentDelete = () => {
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  const mutation = useMutation({
    mutationFn: (id) => deleteStudent(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["students"]);
      addToast("Data berhasil dihapus!");
    },
  });

  const handleDelete = (id) => {
    let confirmed = confirm("Apakah Anda yakin untuk menghapusnya?");
    if (confirmed) mutation.mutate(id);
  };

  return { onDelete: handleDelete };
};

export default useStudentDelete;
