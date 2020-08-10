'use strict'

//platillas de texto: no es más que usar las comillas invertidas + ${}

var nombre = prompt("Introduce tu nombre");
var apellidos = prompt("Introduce tus apellidos");

var texto = `<h1>Hola qué tal</h1> <br> Mi nombre es: ${nombre} y  me apellido ${apellidos}`;

document.write(texto);