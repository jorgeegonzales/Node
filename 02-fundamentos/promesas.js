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
   

const id = 3;
/*getEmpleado(id)
    .then( empleado => console.log( empleado ))
    .catch (error => console.log(error));

getSalario(id)
    .then( salario => console.log(salario ))
    .catch (error => console.log(error));
*/
/*
getEmpleado(id)
    .then( empleado => {
        getSalario(id) 
        .then (salario => {
            console.log('el empleado: ',empleado,'tiene un salario de : ',salario);
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
*/

let nombre;

getEmpleado(id)
.then (empleado => {
    nombre = empleado;
    return getSalario(id)
})
.then( salario => console.log( 'el empleado: ',nombre,'tiene un salario de: ',salario) )
.catch( err => console.log(err));
