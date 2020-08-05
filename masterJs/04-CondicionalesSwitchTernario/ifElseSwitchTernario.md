## if else - else if else
```jsx
'use strict'

// Condicional IF
// Si A = B entonces haz algo

var edad1=42;
var edad2 =42;

if (edad1>edad2){
    console.log(edad1 + " es mayor que " + edad2);

} else if(edad2>edad1)
    console.log(edad2 + " es mayor que " + edad1);

else {
    console.log("edad1 es igual a edad2");
}

// Operadores Lógicos
// and: &&
// or:||
// nor: !
var year = 2020

if (year != 2020) {
    console.log("este no es mi año");
}else{
    console.log("este es mi año");
}
```

## Switch
```jsx
'use strict'

//switch

var edad = "";
var imprime = "";

switch(edad) {
    case 18:
        imprime = "acabas de cumplir la mayoría de edad";
        break;
    case 25:
        imprime = `Tienes ${edad}, por el culo te la hinco`;
        break;
    case 40:
        imprime = "Crisis de los 40";
        break;
    case 75:
        imprime = "estás jodido";
    default:
        imprime = "tu edad es neutra"
        break;
}

console.log(imprime);
```
## Operador condicional Ternario

Lo utilizamos cuando hay dos posibilidades que dependen de una condición.

#### Expresión:
condición ? expr1 (valor que regresa condición = true): expr2 (valor que regresa condición = false);

```jsx
let score = 5;
let exam = (score >= 5 ? 'aprobado' : 'suspenso');
let humour = (exam == "aprobado" ? "feliz" : "triste");

console.log(exam); //aprobado
console.log(humour); //feliz
```