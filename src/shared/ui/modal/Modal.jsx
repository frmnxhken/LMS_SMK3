import { useEffect } from "react";
import { MdClose } from "react-icons/md";

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer = null,
  maxWidth = "max-w-lg",
}) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-90 flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>

      <div
        className={`${maxWidth} relative z-10 w-full rounded-xl bg-white shadow-lg`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-sm font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <MdClose />
          </button>
        </div>

        <div className="p-4">{children}</div>

        {footer && <div className="flex justify-end gap-2 p-4">{footer}</div>}
      </div>
    </div>
  );
}
