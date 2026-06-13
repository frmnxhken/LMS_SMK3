import React from "react";
import Button from "@/shared/ui/buttons/Button";
import { MdAdd, MdSave } from "react-icons/md";

const QuizBuilderAction = ({ addQuestion, onSave, loading }) => {
  return (
    <div className="flex gap-4 justify-between items-center pt-4 border-t border-[var(--color-app-border)]">
      <Button onClick={addQuestion} variant="outline">
        <MdAdd size={18} />
        Tambah Soal
      </Button>

      <Button isLoading={loading} onClick={onSave} type="submit">
        <MdSave size={18} />
        Simpan
      </Button>
    </div>
  );
};

export default QuizBuilderAction;
