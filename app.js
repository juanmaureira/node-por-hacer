const argv = require('./config/yargs').argv;
const porHacer = require('./porhacer/porHacer');
const colors = require('colors');

let command = argv._[0];

switch(command){
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log('Tarea guardada');
    break;
    case 'listar':
        let lista = porHacer.getListado();
        console.log('=========== POR HACER ==============='.green);
        for(let tarea of lista){
            console.log('=====================================\n'.green);
            console.log(tarea.descripcion);
            console.log('Estado:' + tarea.completado);
        }
        console.log('====================================='.green);
    break;
    case 'actualizar':
        let actualizado = porHacer.update(argv.descripcion,argv.completado);
        if(actualizado) console.log('Archivo actualizado');
        else console.log('ARchivo no se pudo actualizar');
    break;

    case 'borrar':
        let status = porHacer.deleteTask(argv.descripcion);
        
    break;

    default:
        console.log('Comando no reconocido');
    break;    
}