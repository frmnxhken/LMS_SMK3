import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";

import useQuizBuilderDetail from "../hooks/useQuizBuilderDetail";
import useQuizBuilder from "../hooks/useQuizBuilder";
import QuizBuilderForm from "../ui/QuizBuilderForm";
import QuizBuilderAction from "../ui/QuizBuilderAction";

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

export const QuizBuilderPage = () => {
  const { id: examId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [deletedQuestions, setDeletedQuestions] = useState([]);
  const { data, isLoading } = useQuizBuilderDetail(examId);
  const { errors, handleSubmit, isPending } = useQuizBuilder(examId);

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
        <QuizBuilderForm
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

      <QuizBuilderAction
        addQuestion={addQuestion}
        onSave={handleSave}
        loading={isPending}
      />
    </div>
  );
};
