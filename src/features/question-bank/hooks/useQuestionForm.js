import { useState } from "react";

const useQuestionForm = (questions, setQuestions) => {
  const handleQuestionChange = (index, value) => {
    setQuestions((prev) =>
      prev.map((q, i) => (i === index ? { ...q, question: value } : q)),
    );
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    setQuestions((prev) =>
      prev.map((q, i) => {
        if (i !== qIndex) return q;
        return {
          ...q,
          options: q.options.map((opt, j) =>
            j === oIndex ? { ...opt, option: value } : opt,
          ),
        };
      }),
    );
  };

  const setCorrectAnswer = (qIndex, oIndex) => {
    setQuestions((prev) =>
      prev.map((q, i) => {
        if (i !== qIndex) return q;
        return {
          ...q,
          options: q.options.map((opt, j) => ({
            ...opt,
            is_correct: j === oIndex,
          })),
        };
      }),
    );
  };

  const addOption = (qIndex) => {
    setQuestions((prev) =>
      prev.map((q, i) =>
        i === qIndex
          ? {
              ...q,
              options: [
                ...q.options,
                {
                  option: "",
                  is_correct: false,
                },
              ],
            }
          : q,
      ),
    );
  };

  const removeOption = (qIndex, oIndex) => {
    setQuestions((prev) =>
      prev.map((q, i) => {
        if (i !== qIndex) return q;

        return {
          ...q,
          options: q.options.filter((_, idx) => idx !== oIndex),
        };
      }),
    );
  };

  const removeQuestion = (index) => {
    setQuestions((prev) =>
      prev.length > 1 ? prev.filter((_, i) => i !== index) : prev,
    );
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
