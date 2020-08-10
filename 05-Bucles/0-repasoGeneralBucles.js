//FOREACH --> recorrer arrays (mirar 7-buclesForeach.js)
//FOR OF --> recorrer obejots iterables:string array, set map
//FOR IN --> recorrer los indices de un objeto
//object.values --> Te devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto
//OF ARGUMENTS --> recorre los elementos de una función

///For-of vs. For-in///

//FOR OF solamente puede iterar en objetos iterables 
//FOR IN puede iterar en cualquier tipo de objeto.
//FOREACH solo puede iterar ARRAYS 

//FOR IN devuelve las claves 
//FOR OF devuelve los valores
//FOR EACH puede devolver el indice (i en el ejemplo)


////////FOREACH//////////

//foreach: forma de recorrer los elementos de un array

frutas = ['melocotón', 'manzana', 'pera', 'piña'];
nums = [4,1,7612312,43,49,5,6];


frutas.forEach(function (fruta) { console.log(fruta);});
nums.forEach(num => { console.log(num);}); //lo podemos expresar de la siguiente manera

///podemos añadir contadores dentro del foreach:
frutas.forEach((fruta, i) => { console.log(i,fruta);});
nums.forEach((num, i) => { console.log(i,num);});

////////FOR OF//////////

//for of: forma de recorrer objetos iterables (string, array, Set, Map, ...)

// ARRAY
const array = [1, 2, 'a'];
for (let value of array) {
    console.log(value);
}
// Resultado:
// 1
// 2
// a

// STRING
const string = 'string';
for (let value of string) {
    console.log(value);
}
// Resultado:
// s
// t
// r
// i
// n
// g

// ARGUMENTS de una función --> recorre los argumentos de una función
function feedBirds() {
    for (let value of arguments) {
        console.log(value);
        console.log('WTF!');
        return "toma que toma"
    }
    
}
feedBirds("gorríon", "mirlo", 'palomo', [string]);
// Resultado:
// 1
// 2
// a
// [ 'string' ]




//OBJECTS --> los objetos no son interables
var car1 = {
    nombre: "Auris Touring Sports Hybrid",
    marca: "Toyota",
    año: 2016,
    techoPanorámico: true,
    propietario: 'Puto Amo',
    arranca: function () {
        console.log("arranca " + this.nombre);
    }
}

//Los objetos no son iterables, si pusieramos el siguiete for of daría error
/*
for (let element of car1) {
    console.log(element)
}
*/

///////FOR IN//////////
//La función for in permite recorre los indices de un objeto
var i = 0;
for (var elemento in car1) {
    console.log(i += 1, elemento + " de car1 es " + car1[elemento]);
}

///Este es el mejor ejemplo de FOR IN:
// Definimos un objeto con los datos de una persona
var persona = {
    nombre: "Peter",
    apellidos: "Parker", 
    pais: "USA",
    profesion: "Student"
    }
    
    for (var indice in persona) {
    console.log("Persona tiene " + indice + " con valor: " + persona[indice]);
    }

///Object.values()/// Te devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto

var car1Array = Object.values(car1);
console.log(car1Array);
car1.arranca();//trasteamos para recordar como se llama a una función dentro de un objeto
car1Array[5].call(car1);//trasteamos, sabemos que la posición 5 del array es una función, pero para poder llamarla fuera del objeto al que pertenece tenemos que usar .Call