'use strict'

//Dentro de la función puedo llamar a variables que han sido declaradas globalmente

var holaMundo = (texto) => {
    var varLocal = "esto es una ejemplo de una variable local"
    console.log(texto);
    console.log(numero);
}

var numero = 12;
var texto = "Hola mundo soy una variable global";

holaMundo(texto)
//Hola mundo soy una variable global
//12

//Fuera de la función no podemos llamar a variables que han sido definidas a nivel local

/*
console.log(varLocal)//ReferenceError: varLocal is not defined
*/


