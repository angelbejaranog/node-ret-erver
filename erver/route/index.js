const express = require("express");
const app = express();

app.use(require("./uurio.js"));
app.use(require("./login.js"));

module.exports = app;
