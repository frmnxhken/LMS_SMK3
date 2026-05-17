import React from "react";

const FormSelect = ({
  label = null,
  id,
  options = [],
  placeholder = "Pilih...",
  feedback,
  className = "",
  ...props
}) => {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-text-body mb-2">
          {label}
        </label>
      )}

      <select
        id={id}
        className={`
          w-full rounded border px-3 py-2 text-sm outline-none transition bg-white
          ${
            feedback
              ? "border-red-500 focus:ring-1 focus:ring-red-500"
              : "border-gray-300 focus:ring-1 focus:ring-blue-500"
          }
          ${className}
        `}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {feedback && <p className="text-xs text-red-500">{feedback}</p>}
    </div>
  );
};

export default FormSelect;
