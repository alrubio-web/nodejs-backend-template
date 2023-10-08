// Función para crear y manejar errores personalizados
function error (message, code) {
	let e = new Error(message); // Crea un nuevo objeto Error con el mensaje proporcionado

	if(code) {
		e.statusCode = code; // Si se proporciona un código, se asigna al objeto Error
	}

	return e; // Retorna el objeto Error
}

// Exporta la función para ser usada en otros archivos
module.exports = error;
