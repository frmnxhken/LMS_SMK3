import Button from "@/shared/ui/buttons/Button";
import React, { useRef, useState } from "react";
import { HiCamera } from "react-icons/hi";
import useUpdatePhoto from "../hooks/useUpdatePhoto";
import { BASE_IMAGE_PROFILE } from "@/shared/lib/Constants";

const PhotoProfile = ({ fullname, role, photo }) => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const { handleUpdate } = useUpdatePhoto();

  const handleOpenFileManger = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
    }
  };

  const handleMainButtonClick = () => {
    if (!selectedFile) {
      handleOpenFileManger();
    } else {
      const formData = new FormData();
      formData.append("photo", selectedFile);

      handleUpdate(formData, {
        onSuccess: () => {
          setSelectedFile(null);
        },
        onError: () => {
          setPreviewUrl(null);
          setSelectedFile(null);
        },
      });
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between border border-app-border gap-4">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="relative group">
          <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
            <img
              src={previewUrl || BASE_IMAGE_PROFILE + photo}
              alt="Profile"
              className="w-full h-full object-cover bg-primary"
            />
          </div>

          <button
            type="button"
            onClick={handleOpenFileManger}
            className="absolute bottom-1 right-1 bg-primary p-2.5 rounded-full text-white transition-all transform hover:scale-110 cursor-pointer z-10"
          >
            <HiCamera size={18} />
          </button>
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-md sm:text-xl font-bold text-text-heading">
            {fullname}
          </h1>
          <p className="text-sm text-text-muted font-medium capitalize">
            {role}
          </p>
        </div>
      </div>

      <Button
        variant={selectedFile ? "primary" : "outline"}
        onClick={handleMainButtonClick}
      >
        {selectedFile ? "Update" : "Ganti Photo"}
      </Button>
    </div>
  );
};

export default PhotoProfile;
