import React from "react";

const InputRow = ({ label, type, name, value, handleChange }) => {
  return (
    <div>
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default InputRow;
