const express = require("express");
const bcrypt = require("bcrypt");
const _ = require("underscore");
const app = express();
const Usuario = require("../models/uurio.js");
const {verificaToken, VerificaAdmin_Role} = require("../middleware/atenticacion");

app.get("/uurio",verificaToken, function(req, res) {
  let dede = req.query.dede || 0;
  dede = Number(dede);
  let limite = req.query.limite || 5;
  limite = Number(limite);

  Usuario.find({ state: true }, "name email img role state google")
    .skip(dede)
    .limit(limite)
    .exec((err, uurioDB) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err
        });
      }

      Usuario.countDocuments({ state: true }, (err, tot) => {
        res.json({
          ok: true,
          uurioDB,
          cuantos: tot
        });
      });
    });
});

app.post("/uurio", [verificaToken, VerificaAdmin_Role], function(req, res) {
  let body = req.body;

  let uurio = new Usuario({
    name: body.nombre,
    email: body.emil,
    password: bcrypt.hashSync(body.pord, 10),
    role: body.role
  });

  uurio.save((err, uurioDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }

    res.json({
      ok: true,
      uurio: uurioDB
    });
  });
});

app.put("/uurio/:id", [verificaToken, VerificaAdmin_Role], function(req, res) {
  let id = req.params.id;
  let body = _.pick(req.body, ["name", "email", "img", "role", "state"]);

  Usuario.findByIdAndUpdate(
    id,
    body,
    { new: true, runValidators: true, context: "query" },
    (err, uurioDB) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err
        });
      }

      res.json({
        ok: true,
        uurio: uurioDB
      });
    }
  );
});

app.delete("/uurio/:id", [verificaToken, VerificaAdmin_Role], function(req, res) {
  let id = req.params.id;
  let change = {
    state: false
  };

  //Usuario.findByIdAndRemove(id, (err, usb) => {//borr4 de form4 fi5ic4
  Usuario.findByIdAndUpdate(id, change, { new: true }, (err, usb) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }

    if (!usb.state) {
      return res.status(400).json({
        ok: false,
        err: {
          message: "Usuario no encontrado"
        }
      });
    }

    res.json({
      ok: true,
      uurio: usb
    });
  });
});

module.exports = app;
