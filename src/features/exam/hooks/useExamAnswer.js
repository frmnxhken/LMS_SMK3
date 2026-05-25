import { useState, useEffect } from "react";

const useExamAnswer = (attemptId) => {
  const [localAnswers, setLocalAnswers] = useState({});
  const storageKey = `exam_attempt_${attemptId}`;

  useEffect(() => {
    if (!attemptId) return;

    const savedData = localStorage.getItem(storageKey);
    if (savedData) {
      const parsed = JSON.parse(savedData);
      const answerMap = {};

      parsed.answers.forEach((ans) => {
        answerMap[ans.question_id] = ans.option_id;
      });
      setLocalAnswers(answerMap);
    }
  }, [attemptId, storageKey]);

  const saveAnswer = (questionId, optionId) => {
    if (!questionId || !attemptId) return;

    const savedData = localStorage.getItem(storageKey);
    let currentStorage = savedData
      ? JSON.parse(savedData)
      : { attempt_id: attemptId, answers: [] };
    const existingIndex = currentStorage.answers.findIndex(
      (ans) => ans.question_id === questionId,
    );

    if (existingIndex !== -1) {
      currentStorage.answers[existingIndex].option_id = optionId;
    } else {
      currentStorage.answers.push({
        question_id: questionId,
        option_id: optionId,
      });
    }

    localStorage.setItem(storageKey, JSON.stringify(currentStorage));
    setLocalAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const getAnswers = () => {
    const savedData = localStorage.getItem(storageKey);
    if (!savedData) return { attempt_id: attemptId, answers: [] };

    return JSON.parse(savedData);
  };

  return {
    saveAnswer,
    getAnswers,
    selectedOptionId: (questionId) => localAnswers[questionId] || null,
  };
};

export default useExamAnswer;
