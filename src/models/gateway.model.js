const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const DeviceSchema = require("./device.model");

const GatewaySchema = new Schema(
  {
    gateway: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      unique: true,
      required: true,
      validate: {
        validator: (v) => {
          return /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
            v
          );
        },
        message: (props) => `${props.value} is not a valid ipv4 address!`,
      },
    },
    peripheral_devices: {
      type: [DeviceSchema],
      required: false,
      maxLength: 10,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Gateway", GatewaySchema);
