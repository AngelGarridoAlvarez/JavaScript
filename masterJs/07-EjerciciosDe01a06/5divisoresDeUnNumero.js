//mostrar todos los números divisores de un número introducido por pantalla

'use strict'

let num = parseInt(prompt('Introduce un número y te diremos por que números es divisible', 1));

while(num <=0){
    alert("Tienes que introducir un número mayor que 0")
    num = parseInt(prompt('Introduce un número y te diremos por que números es divisible', 1));
}

for (let i = 1; i <= num ; i++) {
    if (num % i == 0){
    document.write(`${num} es divisible por ${i} <br>`)
}}