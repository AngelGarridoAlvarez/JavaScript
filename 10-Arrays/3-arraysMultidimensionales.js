//Arrays multidimensionales : son arrays dentro de otros arrays

'use strict'

let categorias = ['Acción','Terror','Drama'];
var peliculas = ['Terminator','Poltergeist','La vida es bella'];

//Creamos el array multidimensional cine
var cine = [peliculas, categorias]

//Esta es la forma de acceder a los elementos de array multidimensional:

console.log(cine[0][0], "-", cine[1][0]);//Terminator - Acción
console.log(cine[0][1], "-",cine[1][1]);//Poltergeist - Terror
console.log(cine[0][2], "-",cine[1][2]);//La vida es bella - Drama