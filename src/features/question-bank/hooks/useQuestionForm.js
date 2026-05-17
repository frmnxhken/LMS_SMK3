import { useState } from "react";

const useQuestionForm = (questions, setQuestions) => {
  const handleQuestionChange = (index, value) => {
    const updated = [...questions];
    updated[index].text = value;
    setQuestions(updated);
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[oIndex] = value;
    setQuestions(updated);
  };

  const setCorrectAnswer = (qIndex, oIndex) => {
    const updated = [...questions];
    updated[qIndex].correctAnswer = oIndex;
    setQuestions(updated);
  };

  const addOption = (qIndex) => {
    const updated = [...questions];
    updated[qIndex].options.push("");
    setQuestions(updated);
  };

  const removeOption = (qIndex, oIndex) => {
    const updated = [...questions];
    if (updated[qIndex].correctAnswer === oIndex)
      updated[qIndex].correctAnswer = 0;
    updated[qIndex].options.splice(oIndex, 1);
    setQuestions(updated);
  };

  const removeQuestion = (index) => {
    if (questions.length > 1) {
      setQuestions(questions.filter((_, i) => i !== index));
    }
  };

  return {
    handleQuestionChange,
    handleOptionChange,
    setCorrectAnswer,
    addOption,
    removeOption,
    removeQuestion,
  };
};

export default useQuestionForm;
