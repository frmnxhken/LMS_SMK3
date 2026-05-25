import React from "react";
import QuestionForm from "../ui/QuestionForm";
import useSubject from "@/features/subject/hooks/useSubject";
import useQuestionDetail from "../hooks/useQuestionDetail";
import { useParams } from "react-router";
import useQuestionUpdate from "../hooks/useQuestionUpdate";

const QuestionEditPage = () => {
  const { id } = useParams();
  const { data: subjects } = useSubject();
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

export default QuestionEditPage;
