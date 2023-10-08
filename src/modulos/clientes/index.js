// Importación de módulos necesarios
const db = require('../../DB/mysql'); // Importa el módulo de base de datos
const ctrl = require('./controlador'); // Importa el controlador de clientes

// Exporta el controlador pasando la base de datos como argumento
module.exports = ctrl(db);
