import React from "react";
import Badge from "@/shared/ui/Feedback/Badge";
import Button from "@/shared/ui/buttons/Button";

const QuestionListCard = (q) => {
  return (
    <div key={q.id} className="border border-app-border p-6 rounded-xl">
      <div>
        <Badge label={q.category} />
        <h3 className="text-md text-text-heading font-semibold mt-2">
          {q.text}
        </h3>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Button variant="outline">Edit</Button>
        <Button variant="outline">Edit Soal</Button>
        <Button variant="danger">Delete</Button>
      </div>
    </div>
  );
};

export default QuestionListCard;
