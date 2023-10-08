const TABLA = 'usuarios'; // Nombre de la tabla en la base de datos
const auth = require('../auth'); // Importa el módulo de autenticación

module.exports = function (dbInyectada) {

	let db = dbInyectada;
	if (!db) {
		db = require('../../DB/mysql'); // Importa el módulo de base de datos si no se inyecta
	}

	// Función para obtener todos los usuarios
	function todos() {
		return db.todos(TABLA);
	}

	// Función para obtener un usuario específico por ID
	function uno(id) {
		return db.uno(TABLA, id);
	}

	// Función para agregar un nuevo usuario
	async function agregar(body) {
		const usuario = {
			id: body.id,
			nombre: body.nombre,
			activo: body.activo
		}
		const respuesta = await db.agregar(TABLA, usuario);

		let insertId = body.id === 0 ? respuesta.insertId : body.id;

		let respuesta2 = '';
		if (body.usuario || body.password) {
			respuesta2 = await auth.agregar({
				id: insertId,
				usuario: body.usuario,
				password: body.password
			});
		}

		return respuesta2;
	}

	// Función para eliminar un usuario
	function eliminar(body) {
		return db.eliminar(TABLA, body);
	}

	// Exporta las funciones para ser usadas en otros archivos
	return {
		todos, uno, agregar, eliminar
	}
}
