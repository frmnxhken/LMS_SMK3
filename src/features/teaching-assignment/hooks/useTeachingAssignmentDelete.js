import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTeachingAssignment } from "../api/teachingAssignmentApi";
import { useToast } from "@/app/contexts/ToastContext";

const useTeachingAssignmentDelete = () => {
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  const mutation = useMutation({
    mutationFn: (id) => deleteTeachingAssignment(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["teachingAssignments"] });
      addToast("Data berhasil dihapus!");
    },
  });

  const handleDelete = (id) => {
    let confirmed = confirm("Apakah Anda yakin untuk menghapusnya?");
    if (confirmed) mutation.mutate(id);
  };

  return { onDelete: handleDelete };
};

export default useTeachingAssignmentDelete;
