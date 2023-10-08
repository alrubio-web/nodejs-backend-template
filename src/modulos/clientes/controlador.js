const TABLA = 'clientes'; // Nombre de la tabla en la base de datos

module.exports = function (dbInyectada) {

	let db = dbInyectada;
	if(!db){
		db = require('../../DB/mysql'); // Importa el módulo de base de datos si no se inyecta
	}

	// Función para obtener todos los clientes
	function todos() {
		return db.todos(TABLA);
	}

	// Función para obtener un cliente específico por ID
	function uno(id) {
		return db.uno(TABLA, id);
	}

	// Función para agregar un nuevo cliente
	function agregar(body) {
		return db.agregar(TABLA, body);
	}

	// Función para eliminar un cliente
	function eliminar(body) {
		return db.eliminar(TABLA, body);
	}

	// Exporta las funciones para ser usadas en otros archivos
	return {
		todos, uno, agregar, eliminar
	}
}
