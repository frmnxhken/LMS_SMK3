import React from "react";
import QuestionListCard from "../ui/QuestionListCard";
import QuestionHeader from "../ui/QuestionHeader";

const QuestionList = () => {
  const dummyQuestions = [
    {
      id: 1,
      text: "Ujian Harian",
      category: "Geografi",
    },
    {
      id: 2,
      text: "UTS",
      category: "Programming",
    },
    {
      id: 3,
      text: "UAS",
      category: "Matematika",
    },
  ];

  return (
    <div className="p-6">
      <QuestionHeader />
      <div className="grid gap-4">
        {dummyQuestions.map((q) => (
          <QuestionListCard {...q} />
        ))}
      </div>
    </div>
  );
};

export default QuestionList;
