import React from "react";
import QuestionForm from "../ui/QuestionForm";
import useSubject from "@/features/subject/hooks/useSubject";
import useQuestionCreate from "../hooks/useQuestionCreate";

const QuestionCreatePage = () => {
  const { data: subjects } = useSubject();
  const { handleSubmit, errors } = useQuestionCreate();

  return (
    <div className="container max-w-[780px] p-6 mx-auto">
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

export default QuestionCreatePage;
