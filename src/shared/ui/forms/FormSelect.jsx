import React from "react";

const FormSelect = ({
  label,
  id,
  children,
  feedback,
  className = "",
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-text-body mb-1">
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
        {children}
      </select>

      {feedback && <p className="text-xs text-red-500 mt-1">{feedback}</p>}
    </div>
  );
};

const Option = ({ value, children, disabled = false, ...props }) => {
  return (
    <option value={value} disabled={disabled} {...props}>
      {children}
    </option>
  );
};

FormSelect.Option = Option;

export default FormSelect;
