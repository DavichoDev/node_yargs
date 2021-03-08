const fs = require('fs');
const colors = require('colors');

// Forma 1
const crearArchivo = ( multiplo = 5, listar = true, limite = 10 ) => {

    return new Promise( ( resolve, reject ) => {

        let salida = '';
        // let salidaOut = '';
        
        for (let index = 1 ; index <= limite ; index++) {
            salida += `${ multiplo } x ${ index } = ${ multiplo*index }\n`;
            // salidaOut += `${ multiplo } ${'x'.green} ${ index } ${'='.green} ${ multiplo*index }\n`;
        }

        if ( listar ) {
            // Impresion
            console.log('=========================='.green);
            console.log(`      Tabla del: ${ colors.blue( multiplo ) }`);
            console.log('=========================='.green);

            // console.log(salidaOut);
            console.log(salida);
        }   

        fs.writeFileSync( `./salida/tabla-${ multiplo }.txt`, salida );
        resolve(`tabla-${ multiplo }.txt`);
    }); 
};

// Forma 2
const crearArchivoAsync = async( multiplo = 5 ) => {

    try {

        let salida = '';

        console.log('==========================')
        console.log(`      Tabla del: ${ multiplo }`);
        console.log('==========================')

        for (let index = 1 ; index <= 10 ; index++) {
            salida += `${ multiplo } x ${ index } = ${ multiplo*index }\n`;
        }
        console.log(salida);
        
        fs.writeFileSync( `tabla-${ multiplo }.txt`, salida );

        return `tabla-${ multiplo }.txt`;

    } catch (error) {
        throw error;
    }

};

module.exports = {
    crearArchivo,
    crearArchivoAsync,
};