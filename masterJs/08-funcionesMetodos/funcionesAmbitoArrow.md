# FUNCIONES

Es un conjunto de órdenes o instrucciones agrupadas bajo un nombre concreto que se pueden reutilizar cuando son invocadas.

```jsx

'use strict'

function ejemploFuncion(parametro1,parametro2){
    
    //Conjunto de instrucciones a ejectuar
    console.log(`hemos elegido como parametros ${parametro1} y ${parametro2} pero una función no tiene por que tener parametros`);

    return "La función me devuelve lo que ponga dentro del return"
}

console.log(ejemploFuncion());
// hemos elegido como parametros 1 y 2 pero una función no tiene por que tener parametros
// hemos elegido como parametros 10 y 20 pero una función no tiene por que tener parametros
```

Se pueden asignar las funciones a variables:

```jsx
let funcion1 = ejemploFuncion(1,2) 


funcion1; //invocamos a la función a través de la variable asignada
```
* No podemos modificar los parámetros de una función asignada a una variable si estamos llamando directamente a la variable.
* Esto se puede hacer si es una [función anónima](#función-anónima) asignada a una variable.

```jsx

fucion1(1,2) 
//TypeError: funcion1 is not a function 
```


Podemos introducir las funciones dentro de bucles para automatizar tareas

```jsx

for (var i = 10, z=20; i<=20, z<=30; i++,z++){
    ejemploFuncion(i,z)
}

// hemos elegido como parametros 1 y 2 pero una función no tiene por que tener parametros
// hemos elegido como parametros 10 y 20 pero una función no tiene por que tener parametros
// hemos elegido como parametros 11 y 21 pero una función no tiene por que tener parametros
// hemos elegido como parametros 12 y 22 pero una función no tiene por que tener parametros
// hemos elegido como parametros 13 y 23 pero una función no tiene por que tener parametros
// hemos elegido como parametros 14 y 24 pero una función no tiene por que tener parametros
// hemos elegido como parametros 15 y 25 pero una función no tiene por que tener parametros
// hemos elegido como parametros 16 y 26 pero una función no tiene por que tener parametros
// hemos elegido como parametros 17 y 27 pero una función no tiene por que tener parametros

```

## Parametros opcionales

Parametros que no son obligatorios si no que ya vienen dados por defecto.


```jsx
function calculadora (num1, num2, mostrar = false) {
    if(mostrar == false){
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        console.log(`${num1} x ${num2} = ${num1 * num2}`);
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
    } else {
        document.write(`${num1} + ${num2} = ${num1 + num2} </br>`);
        document.write(`${num1} - ${num2} = ${num1 - num2} </br>`);
        document.write(`${num1} x ${num2} = ${num1 * num2} </br>`);
        document.write(`${num1} / ${num2} = ${num1 / num2} </br>`);
    }
}

calculadora(1,2); //al no asignar parametro a mostrar lo tomará como false, entonces me aparecerá solamente por consola y no en se escribirá en el DOM.

// 1 + 2 = 3
// 1 - 2 = -1
// 1 x 2 = 2
// 1 / 2 = 0.5
```

## Funciones dentro de otras funciones

Podemos reutilizar funciones dentro de nuestras funciones:

```jsx
function porConsola(num1, num2){
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    console.log(`${num1} x ${num2} = ${num1 * num2}`);
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
}

function  porPantalla(num1, num2){
    document.write(`${num1} + ${num2} = ${num1 + num2} </br>`);
    document.write(`${num1} - ${num2} = ${num1 - num2} </br>`);
    document.write(`${num1} x ${num2} = ${num1 * num2} </br>`);
    document.write(`${num1} / ${num2} = ${num1 / num2} </br>`);
}

function calculadora(num1, num2, mostrar = false) {
    if(mostrar == true){
        porPantalla(num1,num2)
    } else {
        porConsola(num1, num2)
    }
}

```

## REST y SPREAD
Si pasamos más parámetros de los que contempla la función estos se pierden salvo que usamos el método REST
```jsx
function nums(num1, num2){
    console.log("Número1:", num1);
    console.log("Número2:", num2);
}

nums (1,2, 3,4,5); //los números adicionales que introducimos se pierden

// Número1: 1
// Número2: 2


//Usando REST para asignar los parámetros sobrantes a un array:
//ponemos ... antes del último parámetro genérico de la función para que los parámetros sobrantes se guarden en un array en dicho parámetro
function numsRest(num1, ...num2){
    console.log("Número1:", num1);
    console.log("Número2:", num2);
}
numsRest (1,2, 3,4,5); //Los números adicionales se guardan en un array que ocupan la posición del último parámetro

// Número1: 1
// Número2: [ 2, 3, 4, 5 ]
```
SPREAD: pasamos como parámetro un array a una función poniendo ... antes del array para que los elementos del array ocupen las posiciones de los parámetros en lugar de que el array ocupe la posición correspondiente.
```jsx
let arrayNums = [6,7,8];

//sin usar spread al primer parámetro se le asigna el array completo
nums(arrayNums);

// Número1: [ 6, 7, 8 ]
// Número2: undefined

//Usando SPREAD para pasar un array como parámetro
nums(...arrayNums);
// Número1: 6
// Número2: 7

```

## Función Anónima
<a name="funcionAnonima"></a>
Es una función que no tiene nombre, se suelen emplear mucho con los callbacks (funciones dentro de otras funciones).

```jsx
'use strict'

let funAnonima = function (pelicula){
    return console.log(`la película elegida en la función anónima es "${pelicula}".`)
}

funAnonima("Enter the Matrix"); //la película elegida en la función anónima es "Enter the Matrix".
```

## Callback
Es una función que se ejecuta dentro de otra función.

```jsx
function sumame(num1, num2, sumaYmuestra, sumaX2){
    var sum = num1 + num2;
    sumaYmuestra(sum);
    sumaX2(sum);
}
```
La función sumame contiene dos funciones que no están definidas, nosotros vamos a definir dos funciones y se las vamos a pasar como parametro a sumame, eso es hacer un callback:

Podemos meter las funciones directamente como parámetro:

```jsx
sumame(
    1,
    2,
    function(parametro){
        console.log(`La suma es:`, parametro)
    },
    function(parametro){
        console.log(`la suma x 2:`, parametro*2)
    })

//La suma es: 3
//la suma x 2: 6
```

También podemos asignar una variable a las funciones, y luego introducir esas variables como parámetros:

```jsx
var sumarYmostrar = function(parametro){
    console.log(`La suma es:`, parametro)
}

var sumarYmultiplicarX2 = function(parametro){
    console.log(`la suma x 2:`, parametro*2);
}

sumame2(1,2,sumarYmostrar,sumarYmultiplicarX2);

//La suma es: 3
//la suma x 2: 6
```

## Funciones Flecha

Basicamente consiste en quitar la palabra function y añadir una flecha posterior al paréntesis de los parámetros.

De esta forma se abrevia código, lo que resulta para facilitar la lectura de los callback.



```jsx
/*
var sumarYmostrar = function(parametro){
    console.log(`La suma es:`, parametro)
}
*/

var sumarYmostrar = (parametro) => {
    console.log("La suma es:", parametro)
}

var sumarYmultiplicarX2 = (parametro) => {
    console.log(`la suma x 2:`, parametro*2);
}

sumame(1,2,sumarYmostrar,sumarYmultiplicarX2);

```

También se pueden meter directamente como parámetros dentro de la función:

```jsx

sumame(
    1,
    2,
    (parametro) => {
        console.log(`La suma es:`, parametro)
    },
    (parametro) => {
        console.log(`la suma x 2:`, parametro*2)
    })
```
La función flecha se puede simplificar incluso más:

* Con una única sentencia no necesitamos usar "return" ni llaves.
* Si sólo tiene un parámetro podemos obviar los paréntesis del argumento/parámetro.

```jsx
var hello = function saludo(name){
return `Hola ${name} ¿Cómo estás?.`
}
//Esta expresión podríamos simplificarla de la siguiente forma:


hello = name => `Hola ${name} ¿Cómo estás?.`

console.log(hello("Ángel")); //Hola Ángel ¿Cómo estás?.

```
Si no hay ningún argumento o hay más de uno tendremos que usar paréntesis;

```jsx
var hola3 = () => "Hola chavea";
```
Necesitamos llaves y paréntesis si tenemos que devolver un objeto:
```jsx
var hola4 = nombre => ({saludoNormal: "Hola ¿qué ase?", saludoEducado: "Buenos días sr " + nombre})
```
Podemos asignar valores por defecto
```jsx
var frutas = (fruta1 = "melocotones", num1 = 33, fruta2 = "manzanas", num2 = 12) => `tengo ${num1} ${fruta1} y ${num2} ${fruta2}`

```
High order functions (funciones con return dentro de otra función con return) también usan función flecha:

```jsx
function pop() {
    return function stop() {
        return 'Cuándo haces pop ya no hay stop'
    }
}

console.log(pop()()); //Cuándo haces pop ya no hay stop

//Pasaría a ser:

var popArrow = () => () => 'Cuándo haces pop ya no hay stop'

```
Ahora hacemos lo mismo con una función un poco más compleja:

```jsx
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
```
### Limitaciones de las funciones Arrow:
* No permiten crear objetos
* Ignoran Call y Apply
* No reconocen la palabra yield (no permiten funciones generadoras)

## Ámbito
Dentro de la función puedo llamar a variables que han sido declaradas globalmente

```jsx
var holaMundo = (texto) => {
    var varLocal = "esto es una ejemplo de una variable local"
    console.log(texto);
    console.log(numero);
}

var numero = 12;
var texto = "Hola mundo soy una variable global";

holaMundo(texto)
//Hola mundo soy una variable global
//12
```
Fuera de la función no podemos llamar a variables que han sido definidas a nivel local
```jsx
console.log(varLocal)//ReferenceError: varLocal is not defined
```

```jsx

```