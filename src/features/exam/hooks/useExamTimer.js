import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useExamSubmit from "./useExamSubmit";
import useExamAnswer from "./useExamAnswer";

const useExamTimer = (startedAt, duration, attemptId) => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState("--:--:--");
  const { id_class, id_exam } = useParams();
  const { handleSubmit } = useExamSubmit(id_class, id_exam);
  const { getAnswers } = useExamAnswer(attemptId);

  useEffect(() => {
    if (!startedAt) return;

    const startTime = new Date(startedAt.replace(/-/g, "/")).getTime();
    const endTime = startTime + duration * 60 * 1000;

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = endTime - now;

      if (difference <= 0) {
        const answers = getAnswers();
        handleSubmit(answers);
        setTimeLeft("00:00:00");
        clearInterval(timer);
        alert("Waktu ujian telah habis! Jawaban Anda akan otomatis dikirim.");
        return navigate(`/course/${id_class}/exam`);
      }

      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      const formattedTime = [
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),
        seconds.toString().padStart(2, "0"),
      ].join(":");

      setTimeLeft(formattedTime);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [startedAt, duration, navigate]);

  return { timeLeft };
};

export default useExamTimer;
