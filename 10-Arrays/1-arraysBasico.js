'use strict'

//Arrays/arreglos/matrices
//Es una colección de datos que puede tener una variable
var frutas = ["melocotón", "manzana", "pera", "kiwi", "plátano"];

//puedo meter el tipo de datos que yo quiera, incluso otro array

var arrayMezclado = [3, "casa", true, ["array","dentro","de array"]];

var arrayVacío = [];

//Se pueden crear con la clase array:

var misCosas = new Array("teléfono","cartera","llaves","reloj");

//Indices del Array: cada elemento del array tiene un indice empezando por el 0;
console.log(frutas, arrayVacío, misCosas); //[ 'melocotón', 'manzana', 'pera', 'kiwi', 'plátano' ] [] [ 'teléfono', 'cartera', 'llaves', 'reloj' ]
console.log(frutas[0],misCosas[1]);//melocotón cartera
console.log(arrayMezclado[3][0]);//array

//Podemos ver el número de elementos de un array con el método .length

console.log(arrayMezclado.length);//4

var elementoArray = (parseInt(prompt("¿Qué elemento del array frutas quieres seleccionar?",0)));
while(elementoArray > (frutas.length - 1) || elementoArray < 0){
    alert(`el array frutas tiene ${frutas.length} elementos comprendidos entre las posiciones 0 y ${frutas.length - 1}, debe indicar un número comprendido entre 0 y ${frutas.length - 1}`);
    elementoArray = (parseInt(prompt("¿Qué elemento del array frutas quieres seleccionar?",0)));
}
alert (`el elemento seleccionado es ${frutas[elementoArray]}`);
document.write(`el elemento seleccionado es <strong>${frutas[elementoArray]}</strong>`);

//recorrer un array completo y mostrar todos sus elementos por pantalla y por consola

document.write(`</br><h2>Array con elementos de diferentes tipos</h2></br> [${arrayMezclado}]</br>`)
console.log(arrayMezclado)

//Si quiero que me dibuje los elementos uno por uno en la página html lo tengo que hacer con un bucle:
document.write(`El <strong>arrayMeclado</strong> se compone de los siguientes elementos: </br><ul>`)
for(var i=0; i<=arrayMezclado.length; i++){
    document.write(`<li>${arrayMezclado[i]}</li>`)
}
document.write(`</ul>`)
