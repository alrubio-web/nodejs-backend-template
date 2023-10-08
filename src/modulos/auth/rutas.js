// Importación de módulos necesarios
const express = require('express'); // Framework web para Node.js

const respuesta = require('../../red/respuestas'); // Módulo para manejar respuestas
const controlador = require('./index'); // Importa el controlador de autenticación

// Creación del router de Express
const router = express.Router();

// Definición de rutas
router.post('/login', login);

// Función para manejar la ruta de login
async function login(req, res, next) {
	try {
		// Intenta iniciar sesión y obtener un token
		const token = await controlador.login(req.body.usuario, req.body.password);
		// Si tiene éxito, envía una respuesta de éxito
		respuesta.success(req, res, token, 200);
	} catch (err) {
		// Si hay un error, pasa al siguiente middleware de manejo de errores
		next(err);
	}
};

// Exporta el router para ser usado en otros archivos
module.exports = router;
