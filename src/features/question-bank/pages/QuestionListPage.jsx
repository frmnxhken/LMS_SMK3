import React from "react";
import QuestionListCard from "../ui/QuestionListCard";
import QuestionHeader from "../ui/QuestionHeader";
import useQuestion from "../hooks/useQuestion";
import QuestionListCardSkeleton from "../ui/skeletons/QuestionListCardSkeleton";
import EmptyState from "@/shared/ui/Feedback/EmptyState";

export const QuestionListPage = () => {
  const { isLoading, data } = useQuestion();

  return (
    <div className="p-6 container max-w-[800px] mx-auto">
      <QuestionHeader />
      <div className="grid gap-4">
        {isLoading ? (
          <QuestionListCardSkeleton />
        ) : data?.length === 0 ? (
          <EmptyState />
        ) : (
          data?.map((question) => (
            <QuestionListCard key={question.id} question={question} />
          ))
        )}
      </div>
    </div>
  );
};
