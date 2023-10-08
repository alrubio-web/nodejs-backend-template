// Importación de módulos necesarios
const express = require('express'); // Framework web para Node.js
const cors = require ('cors'); // Middleware para habilitar CORS (Cross-Origin Resource Sharing)
const morgan = require('morgan'); // Middleware para registrar solicitudes HTTP
const config = require('./config'); // Importa la configuración del proyecto

// Importación de rutas de diferentes módulos
const clientes = require('./modulos/clientes/rutas');
const usuarios = require('./modulos/usuarios/rutas');
const auth = require('./modulos/auth/rutas');
const error = require('./red/errors'); // Middleware para manejar errores

// Inicialización de la aplicación Express
const app = express();

// Configuración de middlewares
app.use(cors()); // Habilita CORS para todas las rutas
app.use(morgan('dev')); // Usa morgan en modo 'dev' para registrar solicitudes HTTP
app.use(express.json()); // Parsea el cuerpo de las solicitudes entrantes en un objeto JSON
app.use(express.urlencoded({extended: true})); // Parsea el cuerpo de las solicitudes entrantes con payloads URL-encoded

// Configuración de la aplicación
app.set('port', config.app.port); // Establece el puerto en el que se ejecutará el servidor

// Definición de rutas
app.use('/api/clientes', clientes); // Rutas para el módulo de clientes
app.use('/api/usuarios', usuarios); // Rutas para el módulo de usuarios
app.use('/api/auth', auth); // Rutas para el módulo de autenticación
app.use(error); // Middleware para manejar errores

// Exporta la aplicación para ser usada en otros archivos
module.exports = app;
