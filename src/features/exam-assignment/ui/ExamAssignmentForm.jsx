import useQuestion from "@/features/question-bank/hooks/useQuestion";
import Button from "@/shared/ui/buttons/Button";
import FormInput from "@/shared/ui/forms/FormInput";
import FormSelect from "@/shared/ui/forms/FormSelect";
import React, { useState } from "react";

const ExamAssignmentForm = ({ subject, initData, onSubmit }) => {
  const { data: questions } = useQuestion();
  const [formData, setFormData] = useState({
    exam_id: initData?.exam_id || "",
    start_time: initData?.start_time || "",
    end_time: initData?.end_time || "",
  });

  const questionFiltered = questions?.filter(
    (quest) => quest.subject_id === subject,
  );

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <FormSelect
        label="Pilih Soal Ujian"
        name="exam_id"
        value={formData?.exam_id}
        onChange={handleInput}
      >
        <FormSelect.Option value="" disabled>
          Pilih Soal Ujian...
        </FormSelect.Option>
        {questionFiltered?.map((question, index) => (
          <FormSelect.Option value={question.id} key={index}>
            {question.title} - {question.subject.type}
          </FormSelect.Option>
        ))}
        <FormSelect.Option value="other">Pilih...</FormSelect.Option>
      </FormSelect>
      <div className="grid grid-cols-2 gap-2">
        <FormInput
          label="Mulai"
          type="datetime-local"
          name="start_time"
          value={formData?.start_time}
          onInput={handleInput}
        />
        <FormInput
          label="Berakhir"
          type="datetime-local"
          name="end_time"
          value={formData?.end_time}
          onInput={handleInput}
        />
      </div>
      <Button>Simpan</Button>
    </form>
  );
};

export default ExamAssignmentForm;
