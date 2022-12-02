const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeviceSchema = Schema(
  {
    uid: {
      type: Number,
      required: true,
      index: true,
      unique: true,
      sparse: true,
    },
    vendor: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = DeviceSchema;
