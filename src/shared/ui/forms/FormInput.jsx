import React from "react";

const FormInput = ({
  label = null,
  id,
  type = "text",
  placeholder,
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

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`
          w-full rounded border px-3 py-2 text-sm outline-none transition
          ${feedback ? "border-red-500 focus:ring-1 focus:ring-red-500" : "border-gray-300 focus:ring-1 focus:ring-black"}
          ${className}
        `}
        {...props}
      />

      {feedback && <p className="text-xs text-red-500">{feedback}</p>}
    </div>
  );
};

export default FormInput;
