const { crearArchivo, crearArchivoAsync } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

// // PromiseWay
crearArchivo( argv.b, argv.l, argv.h )
.then( nombreArchivo => console.log(`El archivo ${ nombreArchivo.rainbow } fue creado exitosamente.`))
.catch( (error) => console.log(`Tabla del ${ multiplo } no fue creada exitosamente. ${ error }`));

