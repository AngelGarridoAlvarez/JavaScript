//Hacer un programa que nos diga si un número es par o impar

'use strict'

let num = parseInt(prompt("Introduce un número distinto de 0 para determinar si es par o impar","1"));


while (isNaN(num)){
    alert(`${num} no es un número, por favor introduce un número para determinar si es par o impar`);
    num = parseInt(prompt("Introduce un número distinto de 0 para determinar si es par o impar","1"));
}

if(num % 2 == 0) {
    document.write(`${num} es número par.`)
} else {
    document.write(`${num} es número impar.`)
}