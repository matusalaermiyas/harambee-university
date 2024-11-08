import React from "react";

function SelectInput({
  label,
  id,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  className = "",
  labelClassName = "",
  selectClassName = "",
}) {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className={`block text-sm font-medium ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <div className="select-wrapper">
        <select
          id={id}
          value={value}
          onChange={onChange}
          style={{ height: 53, padding: 15, marginTop: 10 }}
          className={`select bg-white border border-inputBorderColor text-sm rounded-lg focus:outline-none focus:border-primaryColor block w-full ${selectClassName}`}
        >
          <option disabled value="">
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SelectInput;
