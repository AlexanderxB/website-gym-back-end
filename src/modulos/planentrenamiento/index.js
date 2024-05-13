const db = require('../../DB_planentrenamiento/mysql');
const ctrl = require('./controlador');

module.exports = ctrl(db);


