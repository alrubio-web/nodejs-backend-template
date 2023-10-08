// Importación de módulos necesarios
const jwt = require('jsonwebtoken'); // Módulo para trabajar con JSON Web Tokens
const config = require('../config'); // Importa la configuración del proyecto
const error = require('../middleware/errors'); // Middleware para manejar errores

// Obtiene la clave secreta desde la configuración
const secret = config.jwt.secret;

// Función para asignar un token a un conjunto de datos
function asignarToken(data){
	return jwt.sign(data, secret); // Retorna el token firmado
}

// Función para verificar un token
function verificarToken(token){
	return jwt.verify(token, secret);
}

// Objeto para chequear el token
const chequearToken = {
	confirmarToken: function(req, id){
		const decodificado = decodificarCabecera(req);

		/*
		// Verifica si el ID decodificado del token coincide con el ID proporcionado
		if(decodificado.id !== id){
			throw error("No tienes privilegios para editar la info de otro usuario", 401)
		}*/
	}
}

// Función para obtener el token desde el encabezado de autorización
function obtenerToken(autorizacion){
	if(!autorizacion){
		throw error('No viene token', 401);
	}

	// Verifica si el encabezado de autorización contiene la palabra "Bearer"
	if (autorizacion.indexOf('Bearer') === -1){
		throw error('Formato no válido', 401)
	}

	// Extrae el token del encabezado de autorización
	let token = autorizacion.replace('Bearer ', '')
	return token;
}

// Función para decodificar el encabezado y obtener el token
function decodificarCabecera(req){
	const autorizacion = req.headers.authorization || '';
	const token = obtenerToken(autorizacion);
	const decodificado = verificarToken(token);

	// Asigna el objeto decodificado al objeto de solicitud
	req.user = decodificado;

	return decodificado;
}

// Exporta las funciones para ser usadas en otros archivos
module.exports = {
	asignarToken,
	chequearToken
}
