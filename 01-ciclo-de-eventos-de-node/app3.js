console.log('Inicio de Programa');//1

setTimeout(() => {
    console.log('Primer Timeout');//5
} ,3000);

setTimeout(() => {
    console.log('Segundo Timeout');//2
} ,0);

setTimeout(() => {
    console.log('Tercer Timeout');//3
} ,0);


console.log('Fin de Programa');//4
