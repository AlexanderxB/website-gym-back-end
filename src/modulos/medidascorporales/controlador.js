const TABLA = 'medidascorporales';

module.exports =  function (dbinyectada){

    let db = dbinyectada;

    if(!db){
        db =  require('../../DB_medidascorporales/mysql');
    }

    function todos () {
        return db.todos(TABLA);
    }
    
    function uno (Cedula) {
        return db.uno(TABLA,Cedula);
    }
      
    function insertar (body) {
        return db.insertar(TABLA,body);
    }
    
    function actualizar(body) {
        return db.actualizar(TABLA,body);
    }
    
    function eliminar (body) {
        return db.eliminar(TABLA,body);
    }

    return {
        todos,
        uno,
        insertar,
        actualizar,
        eliminar,
    }
}