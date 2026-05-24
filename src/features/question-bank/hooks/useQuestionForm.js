const useQuestionForm = (questions, setQuestions, setDeletedQuestions) => {
  const handleQuestionChange = (index, value) => {
    setQuestions((prev) =>
      prev.map((q, i) =>
        i === index
          ? {
              ...q,
              question: value,
              _dirty: true,
            }
          : q,
      ),
    );
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    setQuestions((prev) =>
      prev.map((q, i) => {
        if (i !== qIndex) return q;

        return {
          ...q,
          _dirty: true,
          options: q.options.map((opt, j) =>
            j === oIndex
              ? {
                  ...opt,
                  option: value,
                }
              : opt,
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
          _dirty: true,
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
              _dirty: true,
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
          _dirty: true,
          options: q.options.filter((_, idx) => idx !== oIndex),
        };
      }),
    );
  };

  const removeQuestion = (index) => {
    const question = questions[index];

    if (question?.id) {
      setDeletedQuestions((prev) => [...prev, question.id]);
    }

    setQuestions((prev) => prev.filter((_, i) => i !== index));
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
