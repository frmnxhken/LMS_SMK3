import React from "react";
import { IoDocument, IoTrashOutline } from "react-icons/io5";

const FileCard = ({
  original_name,
  extension,
  size,
  isDeletable = true,
  onDelete,
}) => {
  return (
    <div className="flex items-center justify-between border border-app-border rounded-xl p-4 bg-app-surface">
      <div className="flex items-center w-full overflow-hidden">
        <div className="p-3 bg-red-50 text-red-500 rounded-xl mr-4 flex-shrink-0">
          <IoDocument size={24} />
        </div>

        <div className="truncate w-full">
          <p className="text-sm font-bold text-text-heading truncate mb-0.5">
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
