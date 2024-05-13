const db = require('../../DB_medidascorporales/mysql');
const ctrl = require('./controlador');

module.exports = ctrl(db);

