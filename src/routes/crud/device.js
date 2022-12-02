const express = require("express");
const route = express.Router();
const DeviceSchema = require("../../models/device.model");

route.get("/devices", (req, res) => {
  DeviceSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error }));
});

route.post("/device/:uid", (req, res) => {
  const { uid } = req.params;
  DeviceSchema.find({ uid: uid })
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error }));
});

route.post("/device", (req, res) => {
  const dv = {
    uid: req.body.uid,
    vendor: req.body.vendor,
    status: req.body.status,
  };

  const device = DeviceSchema(dv);
  device
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error }));
});

module.exports = route;
