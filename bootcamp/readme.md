En esta carpeta se encuentran los archivos que me hice cuándo empecé a estudiar el bootcamp de fullstack developer, dentro de la carpeta apuntesPdf puedes encontrar... a ver si lo adivinas.

```jsx
'use strict'

function ejemploFuncion(){
    return "La función me devuelve lo que ponga dentro del return"
}

console.log(ejemploFuncion());

function  ejemploFuncion2(){
    return console.log("Cuando invoque a ejemploFuncion2 me saldrá este texto por consola")
}

ejemploFuncion2(); //aquí estoy invocando a la ejemploFuncion2

const funcion2 = ejemploFuncion2(); // aquí estoy asignado la funcion a una constante

funcion2; //aquí estamos invocando a la función a través de la constante asignada.
```