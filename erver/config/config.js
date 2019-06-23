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
  urlDB =
    "mongodb+srv://yoyo:yoyo123@cluster0-6belp.mongodb.net/cafe?retryWrites=true&w=majority";
}

process.env.URLDB = urlDB;
