const express = require("express");
const route = express.Router();
const validateData = require("../../hooks/useValidateData");
const Gateway = require("../../models/gateway.model");
require("dotenv").config();

route.get("/gateways", (req, res) => {
  res.set("Access-Control-Allow-Origin", process.env.CROS_ACAO);

  Gateway.find()
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error }));
});

route.post("/gateway/:gw", (req, res) => {
  const { gw } = req.params;
  res.set("Access-Control-Allow-Origin", process.env.CROS_ACAO);

  Gateway.find({ gateway: gw })
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error }));
});

route.post("/gateway/index/:id", (req, res) => {
  const { id } = req.params;
  res.set("Access-Control-Allow-Origin", process.env.CROS_ACAO);

  Gateway.findById(id, "gateway name address")
    .exec()
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error }));
});

route.post("/gateway", (req, res) => {
  const gw = {
    gateway: req.body.gateway,
    name: req.body.name,
    address: req.body.address,
    peripheral_devices: req.body.peripheral_devices,
  };
  res.set("Access-Control-Allow-Origin", process.env.CROS_ACAO);

  const { error, message } = validateData(gw);

  if (error) {
    res.status(400).json({ message: message });
    return;
  }

  const gateway = Gateway(gw);

  gateway
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error }));
});

route.put("/gateway/:id", (req, res) => {
  const id = req.params.id;
  const { error } = validateData(req.body);
  res.set("Access-Control-Allow-Origin", process.env.CROS_ACAO);

  if (error) {
    res.status(400).send(error);
    return;
  }

  const { gateway, name, address, peripheral_devices } = req.body;

  Gateway.updateOne(
    { _id: id },
    { $set: { gateway, name, address, peripheral_devices } }
  )
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error }));
});

route.delete("/gateway/:id", (req, res) => {
  const id = req.params.id;
  res.set("Access-Control-Allow-Origin", process.env.CROS_ACAO);

  Gateway.findOneAndRemove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error }));
});

module.exports = route;
