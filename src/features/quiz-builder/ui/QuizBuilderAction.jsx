import React from "react";
import Button from "@/shared/ui/buttons/Button";

const QuizBuilderAction = ({ addQuestion, onSave, loading }) => {
  return (
    <div className="flex gap-4 justify-between items-center pt-4 border-t border-[var(--color-app-border)]">
      <Button onClick={addQuestion} variant="outline">
        + Tambah Soal Baru
      </Button>

      <Button isLoading={loading} onClick={onSave} type="submit">
        Simpan Ke Bank Soal
      </Button>
    </div>
  );
};

export default QuizBuilderAction;
