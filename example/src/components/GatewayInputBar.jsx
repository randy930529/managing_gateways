import React from "react";
import InputRow from "./InputRow";

const GatewayInputBar = ({ formData, handleChange }) => {
  return (
    <div>
      <InputRow
        label={"Serial"}
        type={"text"}
        name={"serial"}
        value={formData.serial}
        handleChange={handleChange}
        required
      />
      <InputRow
        label={"Name"}
        type={"text"}
        name={"name"}
        value={formData.name}
        handleChange={handleChange}
        required
      />
      <InputRow
        label={"IPv4"}
        type={"text"}
        name={"address"}
        value={formData.address}
        handleChange={handleChange}
        required
      />
    </div>
  );
};

export default GatewayInputBar;
