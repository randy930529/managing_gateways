const express = require("express");
const app = express();
var path = require("path");

const routes = require("./src/routes/index");
const { routeGateway, routeDevice } = require("./src/routes/crud/crud");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);
app.use("/api", routeGateway);
app.use("/api", routeDevice);

app.use(function (req, res, next) {
  var err = new Error("Page not Found");
  err.status = 404;
  next(err);
});

module.exports = app;
