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

```