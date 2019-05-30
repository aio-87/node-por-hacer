const descripcion = {
    demand: true,
    alias: 'd'

};
const completado = {
    alias: 'c',
    default: true
};
const argv = require('yargs')
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('borrar', 'Elimina un elemento por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}

/*
comando crear 'Crear un elemento por hacer'
    --descripcion -d
comando actualizar 'Actualiza el estado completado de una tarea'
    --descripcion -d
    --completado -c true


    --help*/