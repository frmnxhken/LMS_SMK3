import React from "react";
import Badge from "@/shared/ui/Feedback/Badge";
import Button from "@/shared/ui/buttons/Button";
import { useNavigate } from "react-router";

const QuestionListCard = (q) => {
  const navigate = useNavigate();
  return (
    <div key={q.id} className="border border-app-border p-6 rounded-xl">
      <div>
        <Badge label={q.type} />
        <Badge variant="success" label={q.subject.name} />
        <h3 className="text-md text-text-heading font-semibold mt-2">
          {q.title}
        </h3>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Button variant="outline">Edit</Button>
        <Button variant="outline" onClick={() => navigate(`${q.id}/create`)}>
          Edit Soal
        </Button>
        <Button variant="danger">Delete</Button>
      </div>
    </div>
  );
};

export default QuestionListCard;
