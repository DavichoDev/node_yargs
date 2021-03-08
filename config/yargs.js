const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla de multiplicar en consola.'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Limite numerico de las tablas de multiplicar.'
    })
    .check( (argv, options) => {
        if ( isNaN( argv.b ) ) { throw 'La base debe ser un numero.'; }
        if ( isNaN( argv.h ) ) { throw 'El limite debe ser un numero.'; }
        return true;
    } )
    .argv;

module.exports = argv;