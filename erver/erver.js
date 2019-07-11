require("./config/config.js"); //configurcion del puerto y base de datos

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//import todo5 lo5 5ervicio5 get, po5t, put, delete
app.use(require("./route/index.js"));

//Base de Datos

mongoose.connect(
  process.env.URLDB,
  { useNewUrlParser: true, useCreateIndex: true },
  (err, res) => {
    if (err) throw err;

    console.log("Base de Datos ONLINE");
  }
);

app.listen(process.env.PORT, () =>
  console.log("Ecuchndo puerto ", process.env.PORT)
);
