/**
 * configurcion del puerto de produccion o de derrollo
 *
 */

process.env.PORT = process.env.PORT || 3000;

/**
 * configurcion del entorno de produccion o de derrollo
 *
 */

process.env.NODE_ENV = process.env.NODE_ENV || "dev";

/**
 * configurcion de la base de datos produccion o de derrollo
 *
 */

let urlDB;

if (process.env.NODE_ENV === "dev") {
  urlDB = "mongodb://localhost:27017/cfe";
} else {
  urlDB = process.env.MONGO_URI;
}    

process.env.URLDB = urlDB;
