const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("5555555555");
});

module.exports = app;
