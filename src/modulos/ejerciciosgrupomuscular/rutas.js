const express = require('express');

const respuesta = require('../../red/respuestas');
const controlador = require('./index');

const router = express.Router();

router.get('/', todos);//trae TODOS LOS DATOS
router.get('/:Cedula', uno);//trae UN SOLO DATO, lo trae con la cedula
router.post('/', insertar);
router.put('/', actualizar);
router.delete('/', eliminar);

async function todos (req,res,next) {
    try {
        const items = await controlador.todos();
        respuesta.success(req, res, items, 200);
    } catch (error) {
        //respuesta.error(req,res,err,500);
        next(err);
    }   
};

async function uno (req,res,next) {
    try {
        const items = await controlador.uno(req.params.Cedula);
        respuesta.success(req, res, items, 200);
    } catch (error) {
        //respuesta.error(req,res,err,500);
        next(error);
    }    
};

async function insertar (req,res,next) {
    try {
        const items = await controlador.insertar(req.body);
        respuesta.success(req, res, 'Item guardado con exito', 201);
    } catch (error) {
        //respuesta.error(req,res,err,500);
        next(err);
    }    
};

async function actualizar (req,res,next) {
    try {
        const items = await controlador.actualizar(req.body);
        respuesta.success(req, res, 'Item actualizado con exito', 201);
    } catch (error) {
        //respuesta.error(req,res,err,500);
        next(err);
    }    
};

async function eliminar (req,res,next) {
    try {
        const items = await controlador.eliminar(req.body);
        respuesta.success(req, res, 'Item eliminado satisfactoriamente', 200);
    } catch (error) {
        //respuesta.error(req,res,err,500);
        next(error);
    }    
};

module.exports = router;