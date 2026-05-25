import React from "react";
import FormInput from "@/shared/ui/forms/FormInput";
import FormTextarea from "@/shared/ui/forms/FormTextArea";
import { FaPlus, FaTimes, FaTrash } from "react-icons/fa";
import { MdCheckCircle, MdRadioButtonUnchecked } from "react-icons/md";
import useQuizBuilderForm from "../hooks/useQuizBuilderForm";

const QuizBuilderForm = ({
  q,
  index,
  questions,
  setQuestions,
  errors,
  setDeletedQuestions,
}) => {
  const {
    handleQuestionChange,
    handleOptionChange,
    setCorrectAnswer,
    addOption,
    removeOption,
    removeQuestion,
  } = useQuizBuilderForm(questions, setQuestions, setDeletedQuestions);

  return (
    <div
      key={index}
      className="border border-app-border rounded-xl p-6 space-y-6"
    >
      <div className="flex justify-between items-center border-b border-[var(--color-app-border)] pb-4">
        <span className="font-bold text-[var(--color-primary)] text-sm uppercase tracking-wider">
          Soal No {index + 1}
        </span>
        <button
          onClick={() => removeQuestion(index)}
          className="text-[var(--color-text-muted)] hover:text-red-500 transition-colors"
        >
          <FaTrash size={16} />
        </button>
      </div>

      <FormTextarea
        label="Pertanyaan"
        placeholder="Tuliskan pertanyaan soal..."
        value={q.question}
        onInput={(e) => handleQuestionChange(index, e.target.value)}
        feedback={errors?.questions?.[index]?.question}
      />

      <div className="space-y-4">
        <label className="block text-sm font-semibold text-[var(--color-text-heading)]">
          Opsi Jawaban & Kunci
        </label>

        <div className="space-y-3">
          {q.options.map((opt, oIndex) => {
            const isCorrect = opt.is_correct;

            return (
              <div
                key={oIndex}
                className={`flex items-start gap-3 p-3 rounded-xl border transition-all ${
                  isCorrect
                    ? "border-green-600 bg-green-100/50"
                    : "border-app-border"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setCorrectAnswer(index, oIndex)}
                  className={`mt-2 text-xl transition-colors ${
                    isCorrect ? "text-green-500" : "text-text-muted"
                  }`}
                >
                  {isCorrect ? <MdCheckCircle /> : <MdRadioButtonUnchecked />}
                </button>

                <div className="flex-1">
                  <FormInput
                    placeholder={`Jawaban ${String.fromCharCode(65 + oIndex)}`}
                    value={opt.option}
                    onInput={(e) =>
                      handleOptionChange(index, oIndex, e.target.value)
                    }
                  />
                </div>

                {q.options.length > 2 && (
                  <button
                    type="button"
                    onClick={() => removeOption(index, oIndex)}
                    className="mt-3 text-text-muted hover:text-red-500"
                  >
                    <FaTimes size={14} />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={() => addOption(index)}
        className="flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:underline"
      >
        <FaPlus size={12} /> Tambah Opsi Jawaban
      </button>
    </div>
  );
};

export default QuizBuilderForm;
