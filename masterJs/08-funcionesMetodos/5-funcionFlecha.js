`use strict`

function sumame(num1, num2, sumaYmuestra, sumaX2) {
    var sum = num1 + num2;
    sumaYmuestra(sum);
    sumaX2(sum);
}

//Basicamente consiste en quitar la palabra function y añadir una flecha posterior al paréntesis de los parámetros

/*
var sumarYmostrar = function(parametro){
    console.log(`La suma es:`, parametro)
}
*/

var sumarYmostrar = (parametro) => {
    console.log("La suma es:", parametro)
}

var sumarYmultiplicarX2 = (parametro) => {
    console.log(`la suma x 2:`, parametro * 2);
}

sumame(1, 2, sumarYmostrar, sumarYmultiplicarX2);


//También se pueden meter directamente como parámetros dentro de la función:

sumame(
    1,
    2,
    (parametro) => {
        console.log(`La suma es:`, parametro)
    },
    (parametro) => {
        console.log(`la suma x 2:`, parametro * 2)
    })


// La función flecha se puede simplificar incluso más:
//
// Con una única sentencia no necesitamos usar "return" ni llaves.
// Si sólo tiene un parámetro podemos obviar los paréntesis del argumento/parámetro.

var hola1 = function saludo(name) {
    return `Hola ${name} ¿Cómo estás?.`
}
//Esta expresión podríamos simplificarla de la siguiente forma:


var hola2 = name => `Hola ${name} ¿Cómo estás?.`

console.log(hola1("Manué"));

//Si no hay ningún argumento o hay más de uno tendremos que usar paréntesis;
var hola3 = () => "Hola chavea";

console.log(hola3());

//Necesitamos llaves y paréntesis si tenemos que devolver un objeto;
var hola4 = nombre => ({saludoNormal: "Hola ¿qué ase?", saludoEducado: "Buenos días sr " + nombre})

console.log(hola4("Pepito").saludoEducado); //Buenos días sr Pepito


//Podemos asignar valores por defecto
var frutas = (fruta1 = "melocotones", num1 = 33, fruta2 = "manzanas", num2 = 12) => `tengo ${num1} ${fruta1} y ${num2} ${fruta2}`

console.log(frutas("plátanos", 2));//tengo 2 plátanos y 12 manzanas

//High order functions (funciones con return dentro de otra función con return) también usan función flecha:

function pop() {
    return function stop() {
        return 'Cuándo haces pop ya no hay stop'
    }
}

console.log(pop()()); //Cuándo haces pop ya no hay stop

//Pasaría a ser:

var popArrow = () => () => 'Cuándo haces pop ya no hay stop'

function queTePica(name) {
    var frase = `Oye ${name}, ¿a ti qué es lo que te pica?`;
    return (
            function (loQuePica, plural = false) {
                if (plural == true) {
                    return `${frase}. Me llamo ${name} y a mí me pican ${loQuePica}`
                } else {
                    return `${frase}. Me llamo ${name} y a mí me pica ${loQuePica}`
                }
            }
    )
}

console.log(queTePica("Manué")("las narices", true)); //Oye Manué, ¿a ti qué es lo que te pica?. Me llamo Manué y a mí me pican las narices
console.log(queTePica("Rosa")("eso que estás pesando", false)); //Oye Rosa, ¿a ti qué es lo que te pica?. Me llamo Rosa y a mí me pica eso que estás pesando

var queTePicaArrow = (name="Ángel") => {
    var frase = `Oye ${name}, ¿a ti qué te pica?`;
    return (loQuePica = "un pie", plural ="false") =>{
        if(plural == true) {
            return `${frase}. Me llamo ${name} y a mí me pican ${loQuePica}`
        } else {
            return `${frase}. Me llamo ${name} y a mí me pica ${loQuePica}`
        }
    }
}

console.log(queTePicaArrow()()); //Oye Ángel, ¿a ti qué te pica?. Me llamo Ángel y a mí me pica un pie

////////////////LIMITACIONES FUNCIONES ARROW///////////////////

/*
No permiten crear objetos;
Ignoran Call y Apply;
No reconocen la palabra yield (no permiten funciones generadoras);*/