import React, { useState } from "react";
import QuestionBuildForm from "../ui/QuestionBuildForm";
import QuestionBuildAction from "../ui/QuestionBuildAction";

export default function QuestionBuildPage() {
  const [errors, setErrors] = useState({});
  const createQuestion = () => ({
    question: "",
    options: [
      { option: "", is_correct: true },
      { option: "", is_correct: false },
      { option: "", is_correct: false },
      { option: "", is_correct: false },
    ],
  });

  const addQuestion = () => {
    setQuestions((prev) => [...prev, createQuestion()]);
  };

  const [questions, setQuestions] = useState([createQuestion()]);

  const handleSave = () => {
    console.log(questions);
  };

  return (
    <div className="max-w-[800px] mx-auto p-6 space-y-8 min-h-screen">
      <h1 className="text-2xl font-bold text-text-heading">
        Ujian harian Bahasa Indonesia
      </h1>

      {questions.map((q, index) => (
        <QuestionBuildForm
          q={q}
          index={index}
          questions={questions}
          setQuestions={setQuestions}
          errors={errors}
        />
      ))}

      <QuestionBuildAction addQuestion={addQuestion} onSave={handleSave} />
    </div>
  );
}
