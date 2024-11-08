import React from "react";

function Input({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  className = "",
  labelClassName = "",
  inputClassName = "",
}) {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          className={`font-Manrope font-semibold ${labelClassName}`}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        style={{
          marginTop: 10,
          height: 46,
          padding: 13,
        }}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input-shadow text-textInputColor border-inputBorderColor border-solid border rounded-md focus:outline-none
          focus:border-primaryColor w-full ${inputClassName}`}
      />
    </div>
  );
}

export default Input;
