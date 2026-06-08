import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTeacher } from "../api/teacherApi";
import { useToast } from "@/app/contexts/ToastContext";

const useTeacherDelete = () => {
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  const mutation = useMutation({
    mutationFn: (id) => deleteTeacher(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["teachers"]);
      addToast("Data berhasil dihapus!");
    },
  });

  const handleDelete = (id) => {
    let confirmed = confirm("Apakah Anda yakin untuk menghapusnya?");
    if (confirmed) mutation.mutate(id);
  };

  return { onDelete: handleDelete };
};

export default useTeacherDelete;
