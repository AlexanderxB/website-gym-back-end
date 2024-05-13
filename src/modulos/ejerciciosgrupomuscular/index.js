const db = require('../../DB_ejerciciosgrupomuscular/mysql');
const ctrl = require('./controlador');

module.exports = ctrl(db);