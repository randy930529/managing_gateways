import React, { useState } from "react";
import GatewayInputBar from "./GatewayInputBar";
import PeripheralDeviceInputBar from "./PeripheralDeviceInputBar";
import { add_gateways } from "../redux/actions/gateway";
import { connect } from "react-redux";

const GatewayActionBar = ({ add_gateways }) => {
  const [formData, setFormData] = useState({
    serial: "",
    name: "",
    address: "",
    devices: [],
  });

  const handleAddDevice = () => {
    const current = formData.devices.slice();
    current.push({
      uid: "",
      vendor: "",
      status: true,
    });
    setFormData({ ...formData, devices: current });
  };

  const handleDeleteDevice = (index) => {
    const current = formData.devices.slice();
    current.splice(index, 1);
    setFormData({ ...formData, devices: current });
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleOnClick = () => {
    add_gateways(formData);
  };

  return (
    <div className="actionBar">
      <GatewayInputBar formData={formData} handleChange={handleChange} />
      <div className="deviceControle">
        Peripheral devices
        <span>{formData.devices.length}</span>
        <button onClick={() => handleAddDevice()}>+</button>
      </div>
      {formData.devices.map((value, index) => (
        <PeripheralDeviceInputBar
          key={index}
          id={index}
          onDelete={handleDeleteDevice}
          formData={formData}
          handleChange={handleChange}
        />
      ))}
      <button onClick={() => handleOnClick()}>Add GW</button>
    </div>
  );
};

const mapStateToProp = (state) => ({});

export default connect(mapStateToProp, {
  add_gateways,
})(GatewayActionBar);
