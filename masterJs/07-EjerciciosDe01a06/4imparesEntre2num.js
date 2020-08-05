//Mostrar todos los números impares que estén entre dos números, incluidos ambos números

'use strict';

let num1 = parseInt(prompt(`Introduce el número dónde quieres empezar a contar`, `0`));
let num2 = parseInt(prompt(`introduce el número dónde quieres que pare de contar`, `0`));

while (num1 > num2) {
    alert(`${num1} es mayor que ${num2}, el número donde empieza a contar tiene que ser menor que el número donde finaliza la cuenta`);
    num1 = parseInt(prompt(`Introduce el número dónde quieres empezar a contar`, `0`));
    num2 = parseInt(prompt(`introduce el número dónde quieres que pare de contar`, `0`));
}


document.write(`<h2>Los números comprendidos entre ${num1} y ${num2} son:</h2>`);

for (let i = num1; i <= num2; i++) {
    if ((i % 2) !== 0) {
        console.log(i)
        document.write(i + "</br>");
    }
}