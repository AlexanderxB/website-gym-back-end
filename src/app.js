// En app.js
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const config = require('./config');

const usuarios =require('./modulos/usuarios/rutas');
const medidascorporales = require('./modulos/medidascorporales/rutas');
const ejerciciosgrupomuscular = require('./modulos/ejerciciosgrupomuscular/rutas');
const planentrenamiento = require('./modulos/planentrenamiento/rutas');
const auth = require('./modulos/auth/rutas');

const error = require('./red/errors');

const app = express();

app.use(cors());

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//configuracion
app.set('port', config.app.port)

// rutas
app.use('/api/usuarios', usuarios);
app.use('/api/medidascorporales', medidascorporales);
app.use('/api/ejerciciosgrupomuscular', ejerciciosgrupomuscular);
app.use('/api/planentrenamiento', planentrenamiento);
app.use('/api/auth', auth);

//la parte del error
app.use(error);

module.exports = app;
