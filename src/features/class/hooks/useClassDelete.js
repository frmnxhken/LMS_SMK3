import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/app/contexts/ToastContext";
import { deleteClass } from "../api/classApi";

const useClassDelete = () => {
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  const mutation = useMutation({
    mutationFn: (id) => deleteClass(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["classes"]);
      addToast("Data berhasil dihapus!");
    },
  });

  const handleDelete = (id) => {
    let confirmed = confirm("Apakah Anda yakin untuk menghapusnya?");
    if (confirmed) mutation.mutate(id);
  };

  return { onDelete: handleDelete };
};

export default useClassDelete;
