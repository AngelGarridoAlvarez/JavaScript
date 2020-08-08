'use strict'

//Transformación de textos

var num = 9;
var texto1 = "Hello World, voy a ser el puto amo del JavaScript";
var texto2 = "I love JavaScript";
var dato = "";
var array = ["melocotón", "manzana", "pera", "piña0", "manzana"];

//Pasar una variable a string

dato = num.toString();

console.log(dato);


//Comprobar que tipo de dato es

dato = typeof dato;

console.log(dato);

//Pasar a mayúsculas

dato = texto1.toUpperCase()

console.log(dato);

//Pasar a minúsculas

dato = dato.toLowerCase();

console.log(dato);

//Calcular longitud, contar carácteres:

dato = texto1.length

console.log(dato);

dato = array.length; //también mide el número de elementos de un array

console.log(dato);

//Unir texto sin usar +

dato = texto1.concat(texto2 + " " + num); //útil para usar con bucles

console.log(dato);

//MÉTODOS PARA HACER BÚSQUEDAS DENTRO DE UN STRING:

//indexOf
// * nos dice el carácter donde empieza la palabra
// * si ponemos una palabra que no está escrita nos devuelve -1

dato = texto1.indexOf("puto");

console.log(dato); //26

//search --> es lo mismo que indexOf

dato = texto1.search("puto");

console.log(dato); //26

//match devuelve un array con una colección de los resultados que encuentre:

var textos = texto1.concat(" " + texto2)

dato = textos.match("JavaScript"); //así no me hace búsqueda global, solo me devuelve la primera palabra
console.log(dato);

//De esta forma sí me hace la búsqueda global:
dato = textos.match(/JavaScript/g);
console.log(dato); //[ 'JavaScript', 'JavaScript' ]

//subtr(dónde empieza el carácter, longitud de que quiero sacar).

dato = texto1.substr(26,8);
console.log(dato); //puto amo

//chartAt(nº de letra que quiero sacar)

 dato = texto1.charAt(44);
 console.log(dato);


//startsWith buscar un texto específico al inicio del string:(true or false)

texto1 = "Hello World, voy a ser el puto amo del JavaScript";
dato = texto1.startsWith("Hell");
console.log(dato); //true
//Es case sensitive
dato = texto1.startsWith("hell");
console.log(dato); //false






