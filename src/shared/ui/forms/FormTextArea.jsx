import React from "react";

const FormTextarea = ({
  label,
  id,
  placeholder,
  feedback,
  rows = 4,
  className = "",
  ...props
}) => {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-text-body">
          {label}
        </label>
      )}

      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        className={`
          w-full rounded border px-3 py-2 text-sm outline-none transition mt-2
          min-h-[100px] resize-y 
          ${
            feedback
              ? "border-red-500 focus:ring-1 focus:ring-red-500"
              : "border-gray-300 focus:ring-1 focus:ring-blue-500"
          }
          ${className}
        `}
        {...props}
      />

      {feedback && <p className="text-xs text-red-500">{feedback}</p>}
    </div>
  );
};

export default FormTextarea;
