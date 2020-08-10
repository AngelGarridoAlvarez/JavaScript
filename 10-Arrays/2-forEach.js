'use strict'


////////FOREACH//////////
//array.forEach(elementoArray, indice, arrayQueLo contiene)
//foreach: forma de recorrer los elementos de un array
//introducimos una función dentro del for each que nos realizará la intrucción indicada en cada elemento del array
var arrayAnimales = ["perro", "gato", "gorrión", "ñu"];
let frutas = ['melocotón', 'manzana', 'pera', 'piña'];
let nums = [4,1,7612312,43,49,5,6];


arrayAnimales.forEach((elemento, indice, array)=>console.log(elemento, indice, array));
//perro 0 [ 'perro', 'gato', 'gorrión', 'ñu' ]
// gato 1 [ 'perro', 'gato', 'gorrión', 'ñu' ]
// gorrión 2 [ 'perro', 'gato', 'gorrión', 'ñu' ]
// ñu 3 [ 'perro', 'gato', 'gorrión', 'ñu' ]

//no tenemos que pedir siempre los 3 elementos predefinidos de forEach
frutas.forEach(fruta => {console.log(fruta);});
nums.forEach(num => { console.log(num);});
arrayAnimales.forEach(animal => { console.log(animal)});

///podemos añadir contadores dentro del foreach:
frutas.forEach((fruta, i) => { console.log(i,fruta);});
nums.forEach((num, i) => { console.log(i,num);});
arrayAnimales.forEach((animal, i) => {
    let length = `caracteres ${animal.length}`;
    return console.log(i, animal, length)
})
document.write(`<ul>`);
arrayAnimales.forEach((elemento, i) => {
    document.write(`<li>La posición ${i} del array la ocupa ${elemento}</li>`)
})
