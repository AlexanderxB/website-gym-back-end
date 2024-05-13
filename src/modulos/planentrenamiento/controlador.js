const TABLA = 'planentrenamiento';

module.exports =  function (dbinyectada){

    let db = dbinyectada;

    if(!db){
        db =  require('../../DB_planentrenamiento/mysql');
    }

    function todos () {
        return db.todos(TABLA);
    }
    
    function uno (ID_PlanEntrenamiento) {
        return db.uno(TABLA,ID_PlanEntrenamiento);
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