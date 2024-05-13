const mysql = require('mysql');
const config = require('../config');
const { resolveObject } = require('url');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

let conexion;

function conMysql(){
    conexion= mysql.createConnection(dbconfig);

    conexion.connect((err) => {
        if(err){
            console.log('[db err]', err);
            setTimeout(conMysql,200);
        }else{
            console.log('DB conectada!!!');
        }
    });

    conexion.on('error', err =>{
        console.log('[db err]', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            conMysql();
        }else{
           throw err; 
        }
    })
} 

conMysql();

function todos(tabla){
    return new Promise( (resolve,reject) => {
        conexion.query(`SELECT * FROM ${tabla}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function uno(tabla, Cedula){
    return new Promise( (resolve,reject) => {
        conexion.query(`SELECT * FROM ${tabla} WHERE Cedula=${Cedula}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function insertar(tabla, data){
    return new Promise( (resolve,reject) => {
        conexion.query(`INSERT INTO ${tabla} SET ? ON DUPLICATE KEY UPDATE ?`, [data,data], (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function actualizar(tabla, data){
    return new Promise( (resolve,reject) => {
        conexion.query(`UPDATE ${tabla} SET ? WHERE Cedula = ?`, [data, data.Cedula], (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function eliminar(tabla, data){
    return new Promise( (resolve,reject) => {
        conexion.query(`DELETE FROM ${tabla} WHERE Cedula=?`, data.Cedula, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

module.exports = {
    todos,
    uno,
    insertar,
    actualizar,
    eliminar,
}