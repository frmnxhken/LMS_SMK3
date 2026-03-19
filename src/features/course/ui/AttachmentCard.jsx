import React from "react";
import Button from "@/shared/ui/buttons/Button";
import { IoClose } from "react-icons/io5";
import { MdInsertDriveFile } from "react-icons/md";
import useCourseSubmission from "../hooks/useCourseSubmission";
import { useParams } from "react-router";

const AttachmentCard = ({ status }) => {
  const { id_class, id_post } = useParams();
  const { files, handleFileChange, handleRemoveFile, handleSubmit } =
    useCourseSubmission(id_class, id_post);

  return (
    <div className="p-4 border border-app-border rounded-xl bg-app-surface">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium">Tugas</h2>
        <p className="text-sm text-text-muted">
          {status === "pending" ? "Ditugaskan" : "Diserahkan"}
        </p>
      </div>
      {status === "pending" && (
        <form onSubmit={handleSubmit}>
          {files?.length > 0 && (
            <ul className="flex flex-col gap-2 mb-2">
              {files?.map((file, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border border-gray-200 rounded-lg px-3 py-2 bg-white"
                >
                  <div className="flex items-center gap-2">
                    <MdInsertDriveFile className="text-xl text-blue-500" />
                    <span className="text-sm truncate">{file.name}</span>
                  </div>
                  <button
                    type="button"
                    className="text-red-500 hover:text-red-700 cursor-pointer"
                    onClick={() => handleRemoveFile(index)}
                  >
                    <IoClose size={18} />
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="flex flex-col gap-2">
            <input
              onChange={handleFileChange}
              name="files"
              type="file"
              id="file-upload"
              className="hidden"
              multiple
            />
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
      )}
    </div>
  );
};

export default AttachmentCard;
