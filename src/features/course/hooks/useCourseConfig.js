import { IoBook, IoClipboard } from "react-icons/io5";

const IconConfig = (type) => {
  return type === "assignment"
    ? {
        icon: IoClipboard,
        bg: "bg-orange-50",
        text: "text-orange-600",
        label: "Tugas",
      }
    : {
        icon: IoBook,
        bg: "bg-blue-50",
        text: "text-primary",
        label: "Materi",
      };
};

export default IconConfig;
