//Creamos un constructor con el que pasaremos a nuestra base de datos
const db = require('../../DB/mysql');
const ctrl = require('./controlador');

module.exports = ctrl(db);