//Lo utilizamos cuando hay dos posibilidades que dependen de una condición.

'use strict'

let score = 5;
let exam = (score >= 5 ? 'aprobado' : 'suspenso');
let humour = (exam == "aprobado" ? "feliz" : "triste");

console.log(exam); //aprobado
console.log(humour); //feliz