import React from "react";
import QuestionForm from "../ui/QuestionForm";
import useQuestionCreate from "../hooks/useQuestionCreate";
import useSubjectList from "@/features/subject/hooks/useSubjectList";

export const QuestionCreatePage = () => {
  const { data: subjects } = useSubjectList();
  const { handleSubmit, errors } = useQuestionCreate();

  return (
    <div className="container max-w-[780px] p-6 mx-auto">
      <h1 className="text-heading font-bold text-md sm:text-xl mb-4">
        Tambah Bank Soal
      </h1>
      <div className="border border-app-border p-4 rounded-xl">
        <QuestionForm
          subjects={subjects}
          onSubmit={handleSubmit}
          errors={errors}
        />
      </div>
    </div>
  );
};
