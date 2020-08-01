const argv = require('yargs')
                    .command('crear', 'Crea una tarea por hacer',{
                        descripcion: {
                            demand: true,
                            alias: 'd',
                            desc: 'Descripcion de la tarea por hacer'
                        }
                    })

                    .command('actualizar','Actualizar el estado completado de una tarea',{
                        descripcion: {
                            demand: true,
                            alias: 'a',
                            desc: 'Descripcion de la tarea por hacer'
                        },
                        completado: {
                            default: true,
                            alias: 'c',
                            desc: 'Marca completado o pendiente la tarea'
                        } 
                    })

                    .command('borrar', 'Borra la tarea especificada por su descripcion',{
                        descripcion:{
                            demand: true,
                            alias: 'b',
                            desc: 'Borra una tarea'
                        }
                    })

                    .help()
                    .argv;
module.exports = {
    argv
}