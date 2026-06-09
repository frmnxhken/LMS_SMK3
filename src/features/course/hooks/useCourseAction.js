import { MdBook, MdAssignment } from "react-icons/md";
import { useNavigate } from "react-router";
import { IoPencil, IoTrash } from "react-icons/io5";
import useCoursePostDelete from "./useCoursePostDelete";

export const useCourseAction = () => {
  const navigate = useNavigate();
  return [
    {
      label: "Materi",
      icon: MdBook,
      onClick: () => navigate("material/create"),
    },
    {
      label: "Tugas",
      icon: MdAssignment,
      onClick: () => navigate("assignment/create"),
    },
  ];
};

export const useCoursePostAction = (id, id_class, type) => {
  const navigate = useNavigate();
  const { handleDelete } = useCoursePostDelete(id_class, id);

  const onDelete = () => {
    const confirm = confirm("Yakin untuk dihapus?");
    if (confirm) handleDelete();
  };

  return [
    {
      label: "Edit",
      icon: IoPencil,
      onClick: () => navigate(`${type}/${id}/edit`),
    },
    {
      label: "Delete",
      icon: IoTrash,
      onClick: onDelete,
    },
  ];
};
