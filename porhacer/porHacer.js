const fs = require('fs');

let listadoPorHacer = [];

const saveDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/db.json',data,(err) => {
        if(err) throw new Error('No se pudo grabar')
    });
}

const readDB = () => {
    try{    
        listadoPorHacer = require('../db/db.json');
    }catch(e){
        listadoPorHacer = [];
    }
}

const getListado = () => {
    readDB();
    return listadoPorHacer;
}

const crear = (descripcion) => {
    
    readDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    saveDB();

    return porHacer;
}

const update = (descripcion, completado = true) =>{
    readDB();
    let index = listadoPorHacer.findIndex( tarea => {
        return tarea.descripcion === descripcion;
    });

    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        saveDB();
        return true;
    }

    return false;

}

const deleteTask = (descripcion) => {
    readDB();
    let nuevoListado = listadoPorHacer.filter( tarea => {
        return tarea.descripcion !== descripcion
    });

    if(nuevoListado.length === listadoPorHacer.length){
        return false;
    }else{
        listadoPorHacer = nuevoListado;
        saveDB();
    }

}

module.exports = {
    crear,
    getListado,
    update,
    deleteTask
}

