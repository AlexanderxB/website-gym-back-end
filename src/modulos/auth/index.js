const db = require('../../DB_usuarios/mysql');
const ctrl = require('./controlador');

module.exports = ctrl(db);