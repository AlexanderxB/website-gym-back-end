const TABLA = 'auth';

module.exports = function (dbinyectada) {
  let db = dbinyectada;

  if (!db) {
    db = require('../../DB_usuarios/mysql');
  }

  function todos() {
    return db.todos(TABLA);
  }

  function uno(Cedula) {
    return db.uno(TABLA, Cedula);
  }

  function insertar(data) {
    const authData = {
      Cedula: data.Cedula,
    };

    if (data.Nombre_Completo) {
      authData.Nombre_Completo = data.Nombre_Completo;
    }

    if (data.Contrasena) {
      authData.Contrasena = data.Contrasena;
    }

    return db.insertar(TABLA, authData);
  }

  function actualizar(body) {
    return db.actualizar(TABLA, body);
  }

  function eliminar(body) {
    return db.eliminar(TABLA, body);
  }

  return {
    todos,
    uno,
    insertar,
    actualizar,
    eliminar,
  };
};

