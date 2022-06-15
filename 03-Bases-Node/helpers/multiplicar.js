const fs = require ('fs');
var colors = require('colors');

const crearArchivo = async (base = 5,listar = false) => {

    try {

        let salida = '';
        
        for (let i= 1; i < 11 ; i++) {
            
            salida += `${ base }x${ i }=${ base*i }\n`;
            
        }
        
        if(listar){
            console.log('========================='.magenta)
            console.log(`Tabla del: ${base}`.underline.blue)
            console.log('========================='.magenta)
            console.log(salida.rainbow);
        }

        fs.writeFileSync(`Tabla-${base}.txt`,salida);

        return `Tabla-${ base }.text`.yellow
        
    } catch (err) {
        throw err
    }

}

module.exports ={
    crearArchivo: crearArchivo
}