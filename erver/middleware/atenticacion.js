//Vefiricacion del TOKEN
const jwt = require("jsonwebtoken");

let verificaToken = (req, res, next) => {
  let token = req.get("token");

  jwt.verify(token, process.env.SEED, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        err: {
          message: "Invalid Token"
        }
      });
    }

    req.usuario = decoded.usuario;

    next();
  });
};

let VerificaAdmin_Role = (req, res) => {
  let usuario = req.usuario;

  if (usuario.role === "ADMIN_ROLE") {
    next();
  } else {
    return res.status(401).json({
      ok: false,
      err: {
        message: "No permitido"
      }
    });
  }
};

module.exports = {
  verificaToken,
  VerificaAdmin_Role
};
