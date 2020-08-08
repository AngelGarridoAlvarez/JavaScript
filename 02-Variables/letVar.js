'use strict'

// Pruebas con Let y var


//Prueba con var
var numero = 40;
console.log(numero) //valor 40

if(true){
    var numero = 50;
    console.log(numero); //valor 50
}

console.log(numero)//valor 50

//Prueba con Let
var texto = "Ángel le echa narices a todo"
console.log(texto);// valor Ángel le echa narices a todo

if(true){
    let texto = "Ángel puto amo"
    console.log(texto); //Ángel puto amo
}

console.log(texto); //Ángel le echa narices a todo
// con la palabra let solo se actua a nivel de bloque por lo que este console.log me vuelve a mostrar la el texto que se nombro con var.

//Let --> alcance limitado al bloque
//Var --> valor global

const nombre = "pepe";
nombre = "juan";
console.log(nombre);