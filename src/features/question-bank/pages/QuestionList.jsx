import React, { useState } from "react";
import QuestionListCard from "../ui/QuestionListCard";
import QuestionHeader from "../ui/QuestionHeader";
import Modal from "@/shared/ui/modal/Modal";
import QuestionForm from "../ui/QuestionForm";
import useSubject from "@/features/subject/hooks/useSubject";
import useQuestionCreate from "../hooks/useQuestionCreate";
import useQuestion from "../hooks/useQuestion";

const QuestionList = () => {
  const { data: subjects } = useSubject();
  const [open, setOpen] = useState(false);
  const { handleSubmit, errors } = useQuestionCreate();
  const { isLoading, data } = useQuestion();
  console.log(data);

  return (
    <div className="p-6">
      <QuestionHeader onOpen={() => setOpen(true)} />
      <Modal title="Tambah Soal" isOpen={open} onClose={() => setOpen(!open)}>
        <QuestionForm
          subjects={subjects}
          onSubmit={handleSubmit}
          errors={errors}
        />
      </Modal>
      <div className="grid gap-4">
        {data?.map((q) => (
          <QuestionListCard {...q} />
        ))}
      </div>
    </div>
  );
};

export default QuestionList;
