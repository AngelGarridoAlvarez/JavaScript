'use strict'

//ALERTA

alert("Esto es un alert introducido en código JavaScript");

//CONFIRMACIÓN
//se ejecutan con confirm, en este caso metemos el resultado dentro de una variable para poder ver la respuesta elegida y la mostramos por pantalla con document.write
var myResul = confirm("esto es un confirm introducido en código JavaScript");
document.write(`has elegido ${myResul} y lo estamos mostrando con document.write()`)

//INGRESO DATOS
var nombre = prompt("¿Cúal es tu nombre", "Ángel");

document.write(`<p> Gracias por responder ${nombre}</p>`);