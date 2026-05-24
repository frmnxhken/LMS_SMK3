import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";

import QuestionBuildForm from "../ui/QuestionBuildForm";
import QuestionBuildAction from "../ui/QuestionBuildAction";

import useQuestionDetail from "../hooks/useQuestionDetail";
import useQuestionBuild from "../hooks/useQuestionBuild";

const createEmptyQuestion = () => ({
  question: "",
  options: [
    { option: "", is_correct: true },
    { option: "", is_correct: false },
    { option: "", is_correct: false },
    { option: "", is_correct: false },
  ],
  _dirty: true,
});

export default function QuestionBuildPage() {
  const { id: examId } = useParams();

  const [questions, setQuestions] = useState([]);
  const [deletedQuestions, setDeletedQuestions] = useState([]);

  const { data, isLoading } = useQuestionDetail(examId);

  const { errors, handleSubmit, isPending } = useQuestionBuild(examId);

  useEffect(() => {
    if (!data) return;

    const fetchedQuestions = data.questions ?? [];

    if (fetchedQuestions.length === 0) {
      setQuestions([createEmptyQuestion()]);
      return;
    }

    setQuestions(
      fetchedQuestions.map((question) => ({
        ...question,
        _dirty: false,
      })),
    );
  }, [data]);

  const addQuestion = useCallback(() => {
    setQuestions((prev) => [...prev, createEmptyQuestion()]);
  }, []);

  const handleSave = useCallback(() => {
    handleSubmit({
      questions,
      deletedQuestions,
    });
  }, [handleSubmit, questions, deletedQuestions]);

  if (isLoading) {
    return <div className="max-w-[800px] mx-auto p-6">Loading...</div>;
  }

  return (
    <div className="max-w-[800px] mx-auto p-6 space-y-8 min-h-screen">
      <h1 className="text-2xl font-bold text-text-heading">Question Builder</h1>

      {questions.map((question, index) => (
        <QuestionBuildForm
          key={question.id ?? `new-${index}`}
          q={question}
          index={index}
          questions={questions}
          setQuestions={setQuestions}
          deletedQuestions={deletedQuestions}
          setDeletedQuestions={setDeletedQuestions}
          errors={errors}
        />
      ))}

      <QuestionBuildAction
        addQuestion={addQuestion}
        onSave={handleSave}
        loading={isPending}
      />
    </div>
  );
}
