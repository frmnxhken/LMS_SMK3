import React from "react";
import { IoDocument, IoTrashOutline } from "react-icons/io5";

const FileCard = ({
  original_name,
  extension,
  size,
  isDeletable = true,
  onDelete,
  ...props
}) => {
  const getFileColorClass = (ext) => {
    const normalizeExt = ext?.toLowerCase().replace(".", "").trim();
    const colorMap = {
      pdf: "bg-red-50 text-red-500",
      doc: "bg-blue-50 text-blue-500",
      docx: "bg-blue-50 text-blue-500",
      xls: "bg-emerald-50 text-emerald-500",
      xlsx: "bg-emerald-50 text-emerald-500",
      csv: "bg-emerald-50 text-emerald-500",
      ppt: "bg-orange-50 text-orange-500",
      pptx: "bg-orange-50 text-orange-500",
      zip: "bg-purple-50 text-purple-500",
      rar: "bg-purple-50 text-purple-500",
      "7z": "bg-purple-50 text-purple-500",
      jpg: "bg-amber-50 text-amber-500",
      jpeg: "bg-amber-50 text-amber-500",
      png: "bg-amber-50 text-amber-500",
      webp: "bg-amber-50 text-amber-500",
      txt: "bg-slate-100 text-slate-600",
      md: "bg-slate-100 text-slate-600",
    };

    return colorMap[normalizeExt] || "bg-gray-50 text-gray-500";
  };

  return (
    <div
      {...props}
      className="cursor-pointer flex items-center justify-between border border-app-border rounded-xl p-4 bg-app-surface"
    >
      <div className="flex items-center w-full overflow-hidden">
        <div
          className={`p-3 rounded-xl mr-4 flex-shrink-0 transition-colors ${getFileColorClass(extension)}`}
        >
          <IoDocument size={18} />
        </div>

        <div className="truncate w-full">
          <p className="text-xs sm:text-sm font-bold text-text-heading truncate mb-0.5">
            {original_name}
          </p>
          <p className="text-[11px] font-medium text-text-muted uppercase tracking-wider">
            {extension} • {size}
          </p>
        </div>
      </div>

      {isDeletable && (
        <button
          type="button"
          className="ml-4 p-2.5 text-red-500 hover:bg-red-50 rounded-xl transition-colors group"
          title="Hapus File"
          onClick={onDelete}
        >
          <IoTrashOutline
            size={20}
            className="group-hover:scale-110 transition-transform"
          />
        </button>
      )}
    </div>
  );
};

export default FileCard;
