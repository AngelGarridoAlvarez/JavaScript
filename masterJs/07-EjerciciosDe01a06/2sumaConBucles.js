//Utilizando un bucle mostrar media y suma de los resultados introducidos por el usuario hasta el usuario meta un número negativo

'use strict'

let num1 = parseFloat(prompt("introduce un primer número", 0));
let num2 = parseFloat(prompt("introduce un segundo número", 0));
let sum = num1 + num2

do {
    alert(`Los números que has introducido suman ${sum} y su media es ${sum / 2}`);
    document.write(`Los números que has introducido suman ${sum} y su media es ${sum / 2}`);
};