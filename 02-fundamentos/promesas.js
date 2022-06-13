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

   const promesa = new Promise( (resolve,reject) => {

        const empleado = empleados.find((e) => e.id === id)?.nombre;

        if ( empleado){
            resolve( empleado);
        } else {
            reject( `No existe empleado con id ${ id }`);
        }
   });

   return promesa;

}

const getSalario = ( id ) => {

    const promesa = new Promise((resolve,reject) => {
        const salario = salarios.find((S) => S.id === id)?.sueldo;
        if (salario){
            resolve( salario);
        } else {
            reject(`No existe salario para id ${ id }`);
        }
    });
    return promesa;
}

const id = 1;
getEmpleado(id)
    .then( empleado => console.log( empleado ))
    .catch (error => console.log(error));

getSalario(id)
    .then( salario => console.log(salario ))
    .catch (error => console.log(error));

   