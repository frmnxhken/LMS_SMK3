import React, { useState, useRef } from "react";
import { MdCloudUpload, MdInsertDriveFile, MdClose } from "react-icons/md";

const FormFileUpload = ({ label, name, onFileSelect, multiple, feedback }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFiles = (files) => {
    const filesArr = Array.from(files);
    const newFiles = multiple ? [...selectedFiles, ...filesArr] : filesArr;
    setSelectedFiles(newFiles);
    if (onFileSelect) onFileSelect({ target: { name, files: newFiles } });
  };

  const handleFileChange = (e) => handleFiles(e.target.files);
  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const removeFile = (index) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
    if (onFileSelect) onFileSelect({ target: { name, files: newFiles } });
  };

  return (
    <div>
      {label && (
        <label className="text-sm font-medium text-text-body">{label}</label>
      )}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current.click()}
        className={`relative flex flex-col items-center justify-center border-2 border-app-border border-dashed rounded-lg p-6 cursor-pointer min-h-[160px] mt-2 
          ${feedback && "border-red-500"}`}
      >
        <input
          type="file"
          ref={fileInputRef}
          multiple={multiple}
          onChange={handleFileChange}
          className="hidden"
          name={name}
        />

        {selectedFiles.length === 0 ? (
          <div className="text-center">
            <MdCloudUpload className="mx-auto text-4xl mb-2 text-gray-400" />
            <p className="text-sm">
              <span className="font-semibold text-primary">
                Klik untuk upload
              </span>{" "}
              atau drag and drop
            </p>
          </div>
        ) : (
          selectedFiles.map((file, index) => (
            <div
              key={index}
              className="flex items-center gap-3 w-full bg-white p-3 rounded border border-gray-200 mb-2"
            >
              <MdInsertDriveFile className="text-3xl text-blue-500" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{file.name}</p>
                <p className="text-xs text-gray-500">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(index);
                }}
                className="p-1 hover:bg-gray-100 rounded-full text-gray-400 hover:text-red-500"
              >
                <MdClose size={20} />
              </button>
            </div>
          ))
        )}
      </div>
      {feedback && <p className="text-xs text-red-500">{feedback}</p>}
    </div>
  );
};

export default FormFileUpload;
