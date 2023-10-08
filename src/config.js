// Importa y configura 'dotenv', un módulo que permite cargar variables de entorno desde un archivo .env
require('dotenv').config();

module.exports = {
	app: {
		port: process.env.PORT || 4000, // Si no se reconoce el puerto a partir de las variables de entorno, se utilizará el 4000
	},
	jwt: {
		secret: process.env.JWT_SECRET  || 'notasecreta!' // Si no se reconoce la clave secreta JWT desde las variables de entorno, se
		// utilizará
		// 'notasecreta!'
	},
	mysql:{
		host: process.env.MYSQL_HOST || 'localhost', // Configuración de la base de datos MySQL
		user: process.env.MYSQL_USER || 'root',
		password: process.env.MYSQL_PASSWORD || '',
		database: process.env.MYSQL_DB || 'ejemplo'
	}
}
