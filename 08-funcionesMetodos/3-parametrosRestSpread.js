'use strict'

// Parámetros REST y SPREAD

function nums(num1, num2){
    console.log("Número1:", num1);
    console.log("Número2:", num2);
}

console.log("Si pasamos más parámetros de los que contempla la función estos se pierden salvo que usamos el método REST")
nums (1,2, 3,4,5); //los números adicionales que introducimos se pierden

// Número1: 1
// Número2: 2


console.log("Usando REST para asignar los parámetros sobrantes a un array")
//REST: ponemos ... antes del último parámetro genérico de la función para que los parámetros sobrantes se guarden en un array en dicho parámetro
function numsRest(num1, ...num2){
    console.log("Número1:", num1);
    console.log("Número2:", num2);
}
numsRest (1,2, 3,4,5); //Los números adicionales se guardan en un array que ocupan la posición del último parámetro

// Número1: 1
// Número2: [ 2, 3, 4, 5 ]

//SPREAD: pasamos como parámetro un array a una función poniendo ... antes del array para que los elementos del array ocupen las posiciones de los parámetros en lugar de que el array ocupe la posición correspondiente.

console.log("pasando array como parámetro sin SPREAD:")
let arrayNums = [6,7,8];
nums(arrayNums);

// Número1: [ 6, 7, 8 ]
// Número2: undefined

console.log("Usando SPREAD para pasar un array como parámetro:")
nums(...arrayNums);
// Número1: 6
// Número2: 7
