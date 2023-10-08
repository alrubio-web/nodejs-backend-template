// Importa la aplicación configurada desde app.js
const app = require('./app');

// Inicia el servidor en el puerto especificado
app.listen(app.get('port'), () => {
	console.log("Servidor escuchando en el puerto", app.get("port"));
});
