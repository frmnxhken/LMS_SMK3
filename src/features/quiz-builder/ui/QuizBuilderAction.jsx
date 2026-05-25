import React from "react";
import Button from "@/shared/ui/buttons/Button";

const QuizBuilderAction = ({ addQuestion, onSave }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-4 border-t border-[var(--color-app-border)]">
      <Button onClick={addQuestion} variant="outline">
        + Tambah Soal Baru
      </Button>

      <div className="flex gap-3 w-full sm:w-auto">
        <Button variant="secondary" type="button">
          Draft
        </Button>
        <Button onClick={onSave} type="submit">
          Simpan Ke Bank Soal
        </Button>
      </div>
    </div>
  );
};

export default QuizBuilderAction;
