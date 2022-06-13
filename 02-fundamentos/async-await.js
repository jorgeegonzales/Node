const empleados = [
    {
        id:1,
        nombre: 'Jorge'
    },
    {
        id:2,
        nombre: 'Linda'
    },
    {
        id:3,
        nombre: 'Karen'
    }
]

const salarios = [
    {
        id:1,
        sueldo: 1000
    },
    {
        id:2,
        sueldo: 1500
    }
]

const getEmpleado = ( id ) => {

    return new Promise( (resolve,reject) => {

        const empleado = empleados.find((e) => e.id === id)?.nombre;

        ( empleado)
           ? resolve( empleado)
           : reject( `No existe empleado con id ${ id }`);
        });
   };

    

const getSalario = ( id ) => {

    return new Promise((resolve,reject) => {
        const salario = salarios.find((S) => S.id === id)?.sueldo;
        
        (salario)
            ? resolve( salario)
            : reject(`No existe salario para id ${ id }`);
        });
    };

const getInfoUsuario = async () => {
   try {
    const empleado = await getEmpleado (id);
    const salario = await getSalario(id);

    return `El salario del empleado: ${ empleado} es de :${ salario} `;

   } catch (error) {

    return error ;
    
   }
   
   
    
}

const id = 3;
getInfoUsuario()
    .then ( msg => {
        console.log('Todo Bien')
        console.log(msg)})
    .catch( err => {
        console.log( 'Todo Mal')
        console.log( err )});






