//Crear una calculadora que pida dos números por pantalla, que si se meten mal vuelva a pedir que lo introduzcamos y que nos muestre en el body de la página en una alerta y por consola el resultado de sumar, restar, multiplicar y dividir esas dos cifras.
'use strict'

let num1 = parseFloat(prompt("Introduce el primer operador"));
let num2 = parseFloat(prompt("introduce el segundo operador"));

while (isNaN(num1) || isNaN(num2)){
    alert("Uno de los operadores introducidos no es un número, por favor inténtalo de nuevo");
    num1 = parseFloat(prompt("Introduce el primer operador"));
    num2 = parseFloat(prompt("introduce el segundo operador"));
}

let result =
    `
    ${num1} + ${num2} = ${num1 + num2} </br>
    ${num1} - ${num2} = ${num1 - num2} </br>
    ${num1} x ${num2} = ${num1 * num2} </br>
    ${num1} : ${num2} = ${num1 / num2} </br>
    `;

document.write(result);

