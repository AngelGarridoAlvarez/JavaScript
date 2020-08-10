'use strict'

/* Antes lo teníamos así:
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
*/

function porConsola(num1, num2){
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    console.log(`${num1} x ${num2} = ${num1 * num2}`);
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
}

function  porPantalla(num1, num2){
    document.write(`${num1} + ${num2} = ${num1 + num2} </br>`);
    document.write(`${num1} - ${num2} = ${num1 - num2} </br>`);
    document.write(`${num1} x ${num2} = ${num1 * num2} </br>`);
    document.write(`${num1} / ${num2} = ${num1 / num2} </br>`);
}

function calculadora(num1, num2, mostrar = false) {
    if(mostrar == true){
        porPantalla(num1,num2)
    } else {
        porConsola(num1, num2)
    }
}

let num1 = parseFloat(prompt("Elige el primer operador"));
let num2 = parseFloat(prompt("Elige el segundo operador"));

while (isNaN(num1) || isNaN(num2)) {
    alert("Al menos uno de los operadores que has elegido no es un número, asegurate de que los dos operadores que eliges están escritos con caracteres numéricos")
    num1 = parseFloat(prompt("Elige el primer operador"));
    num2 = parseFloat(prompt("Elige el segundo operador"));
}

let mostrar = confirm("¿Quieres ver los resultados calculadora escrita en esta página? (si das a cancelar tendrás que abrir la consola del navegador para visualizar los resultados");

calculadora(num1,num2,mostrar);