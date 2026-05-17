import React, { useState } from "react";
import QuestionBuildForm from "../ui/QuestionBuildForm";
import QuestionBuildAction from "../ui/QuestionBuildAction";

export default function QuestionBuildPage() {
  const [errors, setErrors] = useState({});
  const [questions, setQuestions] = useState([
    {
      text: "",
      options: ["", "", "", ""],
      correctAnswer: 0,
    },
  ]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { text: "", options: ["", "", "", ""], correctAnswer: 0 },
    ]);
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

      <QuestionBuildAction addQuestion={addQuestion} />
    </div>
  );
}
