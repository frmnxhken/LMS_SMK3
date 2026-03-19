import { MdBook, MdAssignment } from "react-icons/md";
import { useNavigate, useParams } from "react-router";
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

export const useCoursePostAction = (id) => {
  const navigate = useNavigate();
  const { id_class } = useParams();
  const { handleDelete } = useCoursePostDelete(id_class, id);

  return [
    {
      label: "Edit",
      icon: IoPencil,
      onClick: () => navigate("material/edit/" + id),
    },
    {
      label: "Delete",
      icon: IoTrash,
      onClick: handleDelete,
    },
  ];
};
