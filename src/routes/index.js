const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<div><h1>Home</h1></div>");
});

module.exports = router;
