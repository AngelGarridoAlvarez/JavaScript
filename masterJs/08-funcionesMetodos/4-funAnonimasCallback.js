//Es una función que no tiene nombre, se suelen emplear mucho con los callbacks (funciones dentro de otras funciones).

'use strict'

let funAnonima = function (pelicula){
    return console.log(`la película elegida en la función anónima es "${pelicula}".`)
}

funAnonima("Enter the Matrix"); //la película elegida en la función anónima es "Enter the Matrix".

//Callback:

//En este caso vemos como podemos sustituir los dos console.log del return por pasándo una función como parámetro:

function sumame(num1, num2){
    var sum = num1 + num2;

    return(
        console.log(`La suma es ${sum}.`),
        console.log(`La suma x 2 es ${sum*2}.`)
    )
}
sumame(1,2);

console.log("Aquí empieza el resultado de la función a la que le meto 2 funciones")

function sumame2(num1, num2, sumaYmuestra, sumaX2){
    var sum = num1 + num2;
    sumaYmuestra(sum);
    sumaX2(sum);
}

//vamos a pasar por parametros

var sumarYmostrar = function(parametro){
    console.log(`La suma es:`, parametro)
}

var sumarYmultiplicarX2 = function(parametro){
    console.log(`la suma x 2:`, parametro*2);
}


sumame2(1,2,sumarYmostrar,sumarYmultiplicarX2);

//también podemos pasar la función completa en el hueco del parametro en lugar de asignarla a una variable


console.log("Aquí estamos metiendo la función directamente en el hueco del parametro en lugar de asignarlo previamente a un variable")


sumame2(
    1,
    2,
    function(parametro){
        console.log(`La suma es:`, parametro)
    },
    function(parametro){
        console.log(`la suma x 2:`, parametro*2)
    })

