'use strict'

//Funciones
//Es un conjunto de órdenes o instrucciones agrupadas bajo un nombre concreto que se pueden reutilizar cuando son invocadas.

//Ejemplo de función estándar
function ejemploFuncion(parametro1,parametro2){
    //Conjunto de instrucciones a ejectuar
    console.log(`hemos elegido como parametros ${parametro1} y ${parametro2} pero una función no tiene por que tener parametros`);

    return "La función me devuelve lo que ponga dentro del return"
}

console.log(ejemploFuncion());

let funcion1 = ejemploFuncion(1,2) //se pueden asignar las funciones a variables

//funcion1(1,2) TypeError: funcion1 is not a function --> no podemos modificar los parámetros de una función asignada a una variable si estamos llamando directamente a la variable, esto se podría hacer con funciones anónimas.

funcion1; //invocamos a la función a través de la variable asignada

//Podemos introducir las funciones dentro de bucles para automatizar tareas
for (var i = 10, z=20; i<=20, z<=30; i++,z++){
    ejemploFuncion(i,z)
}

// hemos elegido como parametros 1 y 2 pero una función no tiene por que tener parametros
// hemos elegido como parametros 10 y 20 pero una función no tiene por que tener parametros
// hemos elegido como parametros 11 y 21 pero una función no tiene por que tener parametros
// hemos elegido como parametros 12 y 22 pero una función no tiene por que tener parametros
// hemos elegido como parametros 13 y 23 pero una función no tiene por que tener parametros
// hemos elegido como parametros 14 y 24 pero una función no tiene por que tener parametros
// hemos elegido como parametros 15 y 25 pero una función no tiene por que tener parametros
// hemos elegido como parametros 16 y 26 pero una función no tiene por que tener parametros
// hemos elegido como parametros 17 y 27 pero una función no tiene por que tener parametros

//PARAMETROS OPCIONALES
function calculadora (num1, num2, mostrar = false) {
    if(mostrar == false){
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        console.log(`${num1} x ${num2} = ${num1 * num2}`);
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
    } else {
        document.write(`${num1} + ${num2} = ${num1 + num2} </br>`);
        document.write(`${num1} - ${num2} = ${num1 - num2} </br>`);
        document.write(`${num1} x ${num2} = ${num1 * num2} </br>`);
        document.write(`${num1} / ${num2} = ${num1 / num2} </br>`);
    }
}

calculadora(1,2); //al no asignar parámetro a mostrar lo tomará como false, entonces me aparecerá por consola utilizando node, (luego dará error porque son funciones que hacen referencia al documento y se tienen que ejecutar desde el navegador).

// 1 + 2 = 3
// 1 - 2 = -1
// 1 x 2 = 2
// 1 / 2 = 0.5



let num1 = parseFloat(prompt("Elige el primer operador"));
let num2 = parseFloat(prompt("Elige el segundo operador"));

while (isNaN(num1) || isNaN(num2)) {
    alert("Al menos uno de los operadores que has elegido no es un número, asegurate de que los dos operadores que eliges están escritos con caracteres numéricos")
    num1 = parseFloat(prompt("Elige el primer operador"));
    num2 = parseFloat(prompt("Elige el segundo operador"));
}

let mostrar = confirm("¿Quieres ver los resultados calculadora escrita en esta página? (si das a cancelar tendrás que abrir la consola del navegador para visualizar los resultados");

calculadora(num1,num2,mostrar);

