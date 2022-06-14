const fs = require ('fs');


const crearArchivo = (base = 5) => {

    console.log('=========================')
    console.log(`Tabla del: ${base}`)
    console.log('=========================')

    let salida = '';

    for (let i= 1; i < 11 ; i++) {
        
        salida += `${ base }x${ i }=${ base*i }\n`;

    }

    console.log(salida);

    fs.writeFileSync(`Tabla-${base}.txt`,salida);

    console.log(`Tabla-${ base }.text creada`)


}

module.exports ={
    crearArchivo: crearArchivo
}