import React from "react";
import InputRow from "./InputRow";
import PeripheralDeviceInputRow from "./PeripheralDeviceInputRow";

const PeripheralDeviceInputBar = ({ id, onDelete, formData, handleChange }) => {
  console.log(formData.devices[id]);
  return (
    <div className="deviceInputBar">
      <button style={{ width: "20px" }} onClick={(id) => onDelete(id)}>
        -
      </button>
      <InputRow
        label={"UID"}
        type={"number"}
        name={"uid"}
        value={formData.devices[id].uid}
        handleChange={handleChange}
        required
      />
      <InputRow
        label={"Vendor"}
        type={"text"}
        name={"vendor"}
        value={formData.devices[id].vendor}
        handleChange={handleChange}
        required
      />
      <PeripheralDeviceInputRow
        key={id}
        id={id}
        name={"status"}
        value={formData.devices[id].status}
        handleChange={handleChange}
      />
    </div>
  );
};

export default PeripheralDeviceInputBar;
