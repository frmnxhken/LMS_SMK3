import React from "react";
import Button from "@/shared/ui/buttons/Button";
import FormInput from "@/shared/ui/forms/FormInput";
import useClass from "@/features/class/hooks/useClass";

const StudentCreatePage = () => {
  const { data: classes } = useClass();

  return (
    <div className="container max-w-[680px] mx-auto p-6">
      <div className="border border-app-border p-4 rounded-xl">
        <h1 className="text-xl text-text-heading font-bold mb-4">
          Tambah Siswa
        </h1>
        <form action="" method="post" className="space-y-2">
          <FormInput label="NIS" />
          <FormInput label="Nama Lengkap" />
          <FormInput label="Username" />
          <FormInput label="Password" />
          <select name="" className="w-full border border-app-border py-1 px-4">
            {classes?.map((c, i) => (
              <option value={i}>{c.level + " " + c.major}</option>
            ))}
          </select>
          <Button>Simpan</Button>
        </form>
      </div>
    </div>
  );
};

export default StudentCreatePage;
