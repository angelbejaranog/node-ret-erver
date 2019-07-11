/**
 * configurcion del puerto de produccion o de derrollo
 * Heroku
 */

process.env.PORT = process.env.PORT || 3000;

/**
 * SEED / Semilla
 * Heroku
 */

process.env.SEED = process.env.SEED || 'pororo';

/**
 * Vencimiento del TOken 
 * Heroku
 * 60 segundos
 * 60 minutos
 * 24 horas
 * 30 dias
 */

 process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

/**
 * configurcion del entorno de produccion o de derrollo
 * Heroku
 */

process.env.NODE_ENV = process.env.NODE_ENV || "dev";

/**
 * configurcion de la base de datos produccion o de derrollo
 * Heroku
 */

let urlDB;

if (process.env.NODE_ENV === "dev") {
  urlDB = "mongodb://localhost:27017/cfe";
} else {
  urlDB = process.env.MONGO_URI;
}    

process.env.URLDB = urlDB;
