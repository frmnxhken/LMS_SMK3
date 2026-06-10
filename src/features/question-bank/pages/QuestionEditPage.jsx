import React from "react";
import QuestionForm from "../ui/QuestionForm";
import useQuestionDetail from "../hooks/useQuestionDetail";
import { useParams } from "react-router";
import useQuestionUpdate from "../hooks/useQuestionUpdate";
import useSubjectList from "@/features/subject/hooks/useSubjectList";

export const QuestionEditPage = () => {
  const { id } = useParams();
  const { data: subjects } = useSubjectList();
  const { isLoading, data } = useQuestionDetail(id);
  const { errors, handleSubmit } = useQuestionUpdate(id);
  if (isLoading) return;

  return (
    <div className="container max-w-[780px] p-6 mx-auto">
      <div className="border border-app-border p-4 rounded-xl">
        <QuestionForm
          subjects={subjects}
          initData={data}
          errors={errors}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};
