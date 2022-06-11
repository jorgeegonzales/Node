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

const getEmpleado = (id,callback) => {

    const empleado = empleados.find((e) => e.id === id);

    if(empleado){
        callback(null,empleado);
    } else {
        callback(`Empleado con id ${id} no existe`);
    }

}

const getSalario = (id,callback) => {

    const salario = salarios.find((s) => s.id ===id );

    if (salario) {
        callback(null,salario);
    }else {
        callback(`Salario con id ${id} no existe`);
    }

   

}

const id = 1;
getEmpleado(id, (err,empleado) => {

    if(err){
        console.log('ERROR!');
        return console.log(err);
    }

    console.log('Empleado Existe');
    console.log(empleado);
})

getSalario(id,(err,salario) => {

    if(err){
        console.log('ERROR');
        return console.log(err);
    }

    console.log('Salario Existe');
    console.log(salario.sueldo);

})
