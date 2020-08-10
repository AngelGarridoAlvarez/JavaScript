'use strict'

let escritorio = ["post-it", "lap-top", "controller", "mouse", "pen", "highlighter", "hydrogel"];
console.log(escritorio);

//Añadir elemento al final
escritorio.push("printer")
console.log(escritorio);
// [ 'post-it',
//     'lap-top',
//     'controller',
//     'mouse',
//     'pen',
//     'highlighter',
//     'hydrogel',
//     'printer' ]

//Eliminar el último elemento
escritorio.pop();
console.log(escritorio);

//Elimina el primer elemento
escritorio.shift();
console.log(escritorio);

//Deshace el shift introduciendo el nombre del elemento
escritorio.unshift("post-it");
console.log(escritorio);

//Localizar un elemento de un array
console.log(escritorio.indexOf("pen"));

//Eliminar un elemento concreto del array con Splice
//Aquí pido que me elimine 3 elementos desde el elemento 4
escritorio.splice(4,3);
console.log(escritorio);

//Convertir un array a texto con .join()

let escritorioString = escritorio.join(", ")
console.log(escritorioString); //post-it, lap-top, controller, mouse

//Convertir string separado por comas a Array
let escritorioArray = escritorioString.split(", ");
console.log(escritorioArray); //[ 'post-it', 'lap-top', 'controller', 'mouse' ]

//Ordenar array
escritorioArray.sort()
console.log(escritorioArray)//[ 'controller', 'lap-top', 'mouse', 'post-it' ]

//dar la vuelta al array
escritorioArray.reverse()
console.log(escritorioArray)//[ 'post-it', 'mouse', 'lap-top', 'controller' ]

//Busquedas en un array

let buscarLapTop = escritorio.find(elemento => elemento == "lap-top");
console.log(buscarLapTop);//lap-top (si no lo encuentra da undefined)

//findIndex buscar la posición de un elemento del array
buscarLapTop = escritorio.findIndex(elemento => elemento == "lap-top");
console.log(buscarLapTop);//1

//método some = comprobar si algún valor es menor, mayor o =
let numeros = [1, 33, 65, 5612, -23, 12, 3424234552];
var busqueda1 = numeros.some(numero => numero >=2342353456546546);
console.log(busqueda1);//false