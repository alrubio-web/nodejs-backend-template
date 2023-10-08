// Importación del módulo de autenticación
const auth = require('../../auth');

// Exportación de la función que chequea la autenticación
module.exports = function chequearAuth() {
	// Definición del middleware
	function middleware(req, res, next) {
		const id = req.body.id; // Obtención del ID desde el cuerpo de la solicitud
		auth.chequearToken.confirmarToken(req, id); // Verificación del token
		next(); // Pasa al siguiente middleware o ruta
	}
	// Retorna el middleware
	return middleware;
}
