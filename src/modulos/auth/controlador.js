const TABLA = 'auth'; // Nombre de la tabla en la base de datos
const bcrypt = require('bcrypt'); // Módulo para cifrar contraseñas
const auth = require('../../auth'); // Importa el módulo de autenticación

module.exports = function (dbInyectada) {

	let db = dbInyectada;
	if(!db){
		db = require('../../DB/mysql'); // Importa el módulo de base de datos si no se inyecta
	}

	// Función para iniciar sesión
	async function login(usuario, password){
		const data = await db.query(TABLA, {usuario: usuario});

		return bcrypt.compare(password, data.password)
			.then(resultado => {
				if(resultado === true){
					// Generar un token
					return auth.asignarToken({ ...data})
				}else{
					throw new Error('Información no válida');
				}
			});
	}

	// Función para agregar un usuario
	async function agregar(data) {
		const authData = {
			id: data.id,
		}

		if(data.usuario){
			authData.usuario = data.usuario
		}

		if(data.password){
			authData.password = await bcrypt.hash(data.password.toString(), 5);
			// El 5 son las veces que se cifra la contraseña, una referencia sería entre 5 y 10 veces.
		}

		return db.agregar(TABLA, authData);
	}

	// Exporta las funciones para ser usadas en otros archivos
	return {
		agregar,
		login
	}
}
