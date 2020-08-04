const miArray = [1,3,5,7];

miArray.forEach((value, index)=> console.log(value));

miArray.forEach( function(val, ind){
    console.log(val,ind)

});


///////////////////// For coge valor a valor de un array

for (value of miArray) {
    console.log(value);
}

for (let index in miArray){
    console.log(miArray[index]);
}

function pepe() {
    console.log(arguments);
}

pepe(1,3,5,7);

/////////////////////
console.log('AQUÍ EMPIZAN LOS RESULTADOS DE FOR-IN');

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



///////////////////////////


const array = [3, 4, 5, 'string'];
const obj = {
  name: 'John',
  age: 20
};
 
// ARRAY
for (value of array) {
  console.log(value);  
}
// Resultado:
// 3
// 4
// 5
// string
 
for (key in array) {
  console.log(key);  
}
// Resultado:
// 0
// 1
// 2
// 3
 
// OBJETO
for (key in obj) {
  console.log(key);  
}
// Resultado:
// name
// age
 
for (value of obj) {
  console.log(value);  
}
// Resultado:
// TypeError: obj[Symbol.iterator] is not a function