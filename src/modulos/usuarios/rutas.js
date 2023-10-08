// Importación de módulos necesarios
const express = require('express');

const seguridad = require('./seguridad'); // Módulo para manejar la seguridad
const respuesta = require('../../red/respuestas'); // Módulo para manejar respuestas
const controlador = require('./index'); // Importa el controlador de usuarios

// Creación del router de Express
const router = express.Router();

// Definición de rutas
router.get('/', todos);
router.get('/:id', uno);
router.post('/', seguridad(), agregar);
router.delete('/', seguridad(), eliminar);

// Función para manejar la obtención de todos los usuarios
async function todos(req, res, next) {
	try {
		const items = await controlador.todos();
		respuesta.success(req, res, items, 200);
	} catch (err) {
		next(err);
	}
};

// Función para manejar la obtención de un usuario específico por ID
async function uno(req, res, next) {
	try {
		const items = await controlador.uno(req.params.id);
		respuesta.success(req, res, items, 200);
	} catch (err) {
		next(err);
	}
};

// Función para manejar la adición de un nuevo usuario
async function agregar(req, res, next) {
	try {
		const items = await controlador.agregar(req.body);
		let mensaje = req.body.id == 0 ? 'Item guardado con éxito' : 'Item actualizado con éxito';
		respuesta.success(req, res, mensaje, 201);
	} catch (err) {
		next(err);
	}
};

// Función para manejar la eliminación de un usuario
async function eliminar(req, res, next) {
	try {
		const items = await controlador.eliminar(req.body);
		respuesta.success(req, res, 'Item eliminado satisfactoriamente', 200);
	} catch (err) {
		next(err);
	}
};

// Exporta el router para ser usado en otros archivos
module.exports = router;
