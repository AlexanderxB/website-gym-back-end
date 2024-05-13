const TABLA = 'ejerciciosgrupomuscular';

module.exports =  function (dbinyectada){

    let db = dbinyectada;

    if(!db){
        db =  require('../../DB_ejerciciosgrupomuscular/mysql');
    }

    function todos () {
        return db.todos(TABLA);
    }
    
    function uno (ID_EjerciciosGrupoMuscular) {
        return db.uno(TABLA,ID_EjerciciosGrupoMuscular);
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