//Utilizando un bucle mostrar media y suma de los resultados introducidos por el usuario hasta el usuario meta un número negativo

'use strict'

let sum = 0;
let counter = 0;
let num = 0;

do {
    num = parseFloat(prompt(`introduce un número para sumar`, "0"));

    //con isNan nos aseguramos de que si no es número sume 0 pero no aumente el valor de counter
    if(isNaN(num)){
        num = 0;
    }else{
    sum = sum + num;
    counter ++;
    alert(`has introducido ${counter} números que suman ${sum} y hacen una media de ${sum/counter}`)}
} while (num >= 0);

document.write(`Has introducido ${counter} números que suman ${sum} y su media es ${sum / counter}`);