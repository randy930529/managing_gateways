import React from "react";

const PeripheralDeviceInputRow = ({ id, name, value, handleChange }) => {
  return (
    <div>
      Status
      <select
        name={name}
        value={value}
        id={id}
        style={{ marginLeft: "20px" }}
        onChange={handleChange}
      >
        <option value={true}>online</option>
        <option value={false}>offline</option>
      </select>
    </div>
  );
};

export default PeripheralDeviceInputRow;
