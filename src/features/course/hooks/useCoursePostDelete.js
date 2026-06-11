import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCoursePost } from "../api/coursePostApi";
import { useNavigate } from "react-router";

const useCoursePostDelete = (id_class, id_post) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: () => deleteCoursePost(id_class, id_post),
    onSuccess: () => {
      queryClient.invalidateQueries(["coursePosts", id_class]);
      return navigate(`/course/${id_class}`);
    },
  });
  const handleDelete = () => {
    let confirmed = confirm("Yakin untuk dihapus?");
    if (confirmed) mutation.mutate();
  };

  return {
    handleDelete,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
  };
};

export default useCoursePostDelete;
