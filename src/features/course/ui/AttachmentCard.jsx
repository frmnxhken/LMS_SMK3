import React from "react";
import Button from "@/shared/ui/buttons/Button";

const AttachmentCard = () => {
  return (
    <div className="p-4 border border-app-border rounded-xl bg-app-surface">
      <form action="">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium">Tugas</h2>
          <p className="text-sm text-text-muted">Ditugaskan</p>
        </div>
        <div className="flex flex-col gap-2">
          <input type="file" id="file-upload" className="hidden" />
          <label
            htmlFor="file-upload"
            className="flex items-center justify-between w-full border border-gray-300 px-4 py-2 rounded-lg cursor-pointer bg-white hover:bg-gray-50 transition-all"
          >
            <span className="text-text-muted text-sm">Pilih file...</span>
            <span className="bg-primary text-white px-3 py-1 rounded-md text-xs font-semibold">
              Browse
            </span>
          </label>
        </div>
        <Button className="w-full mt-2">Serahkan</Button>
      </form>
    </div>
  );
};

export default AttachmentCard;
