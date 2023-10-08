// Función para manejar respuestas exitosas
exports.success = function (req, res, mensaje = '', status = 200) {
	res.status(status).send({
		error: false, // Indica que no hay error
		status: status, // Estado HTTP
		body: mensaje // Cuerpo del mensaje
	});
}

// Función para manejar respuestas de error
exports.error = function (req, res, mensaje = 'Error Interno', status = 500) {
	res.status(status).send({
		error: true, // Indica que hay un error
		status: status, // Estado HTTP
		body: mensaje // Cuerpo del mensaje
	});
}
