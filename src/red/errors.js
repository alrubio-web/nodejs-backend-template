// Importación del módulo de respuestas
const respuesta = require('./respuestas');

// Definición del middleware de manejo de errores
function errors(err, req, res, next) {
	console.error('[error]', err); // Logueo del error en la consola

	const message = err.message || 'Error interno'; // Mensaje de error
	const status = err.statusCode || 500; // Código de estado HTTP

	// Envío de la respuesta de error al cliente
	respuesta.error(req, res, message, status);
}

// Exportación del middleware de manejo de errores
module.exports = errors;
