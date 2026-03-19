import React, { useState } from "react";
import FormInput from "@/shared/ui/forms/FormInput";
import FormTextarea from "@/shared/ui/forms/FormTextArea";
import FormFileUpload from "@/shared/ui/forms/FormFileUpload";
import Button from "@/shared/ui/buttons/Button";
import FileCard from "@/shared/ui/cards/FileCard";

const MaterialForm = ({
  initialData = {},
  onSubmit,
  errors,
  onDelete,
  existingFiles = [],
}) => {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    content: initialData?.content || "",
    files: [],
  });

  const handleInput = (e) => {
    const { name, type, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? [...prev[name], ...Array.from(files)] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSubmit) onSubmit(formData);
  };

  const handleDeleteFile = (id) => {
    onDelete(id);
  };

  return (
    <form method="post" onSubmit={handleSubmit} className="space-y-4">
      <FormInput
        onInput={handleInput}
        name="title"
        label="Judul materi"
        type="text"
        value={formData.title}
        feedback={errors?.title?.[0]}
      />
      <FormTextarea
        onInput={handleInput}
        name="content"
        label="Deskripsi"
        placeholder="Ketik deskripsi..."
        value={formData.content}
        feedback={errors?.content?.[0]}
      />
      <FormFileUpload
        onFileSelect={(e) =>
          setFormData((prev) => ({ ...prev, files: e.target.files }))
        }
        multiple
        name="files"
        label="Lampiran"
        feedback={errors?.files?.[0]}
      />

      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {existingFiles?.map((file, index) => (
          <FileCard
            onDelete={() => handleDeleteFile(file.id)}
            key={index}
            {...file}
          />
        ))}
      </div>

      <Button className="w-full">Submit</Button>
    </form>
  );
};

export default MaterialForm;
