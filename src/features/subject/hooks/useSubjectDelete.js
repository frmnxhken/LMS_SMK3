import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSubject } from "../api/subjectApi";
import { useToast } from "@/app/contexts/ToastContext";

const useSubjectDelete = () => {
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  const mutation = useMutation({
    mutationFn: (id) => deleteSubject(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["subjects"]);
      addToast("Data berhasil dihapus!");
    },
  });

  const handleDelete = (id) => {
    let confirmed = confirm("Apakah Anda yakin untuk menghapusnya?");
    if (confirmed) mutation.mutate(id);
  };

  return { handleDelete };
};

export default useSubjectDelete;
