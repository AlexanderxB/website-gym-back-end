const TABLA = 'usuarios';
const auth = require('../auth'); // Ajusta la ruta según la ubicación del módulo auth

module.exports =  function (dbinyectada){

    let db = dbinyectada;

    if(!db){
        db =  require('../../DB_usuarios/mysql');
    }

    function todos () {
        return db.todos(TABLA);
    }
    
    function uno (Cedula) {
        return db.uno(TABLA,Cedula);
    }

    /*function insertar (body) {
        return db.insertar(TABLA,body);
    }*/

    /*async function insertar(body) {
        // Validación de datos
        if (!body.Cedula || !body.Nombre_Completo || !body.Celular) {
            throw new Error('Todos los campos son requeridos.');
        }

        // Insertar datos en la base de datos
        const respuesta = await db.insertar(TABLA, body);

        // Verificar si se insertaron correctamente
        if (!respuesta) {
            throw new Error('Error al insertar los datos en la base de datos.');
        }

        return true;
    }*/

    async function insertar(body) {
        // Validación de datos
        if (!body.Cedula || !body.Nombre_Completo || !body.Celular || !body.Contrasena) {
            throw new Error('Todos los campos son requeridos.');
        }

        // Insertar datos en la tabla de usuarios
        const respuesta = await db.insertar(TABLA, {
            Cedula: body.Cedula,
            Nombre_Completo: body.Nombre_Completo,
            Celular: body.Celular
        });

        // Verificar si se insertaron correctamente
        if (!respuesta) {
            throw new Error('Error al insertar los datos en la tabla de usuarios.');
        }

        // Insertar en la tabla de autenticación
        await auth.insertar({
            Cedula: body.Cedula,
            Nombre_Completo: body.Nombre_Completo,
            Contrasena: body.Contrasena
        });

        return true;
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