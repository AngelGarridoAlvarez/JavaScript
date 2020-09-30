// #Tipos de datos en TypeScript:
//## 1.string
// tsc -w .\03.tipos-datos.ts
let cadena = "Ángel Garrido Álvarez";
console.log(cadena);// Ángel Garrido Álvarez

/*
cadena = 5;

Al trancriptar a js me da el siguiente error:

03.tipos-datos.ts:11:1 - error TS2322: Type 'number' is not assignable to type 'string'.

11 cadena = 5;
 */

//## 2. number
let numero: number = 12;

//## 3. boolean

let booleano: boolean = true;

//## 4. any
let cualquiera: any = "hola";
cualquiera = 5;

console.log(cadena, numero, booleano, cualquiera) //Ángel Garrido Álvarez 12 true 5

//## 5. array
var lenguajes: Array<string> = ["JavaScript", "PHP", "CSS", "HTML"];

let years: number[] = [22, 33, 44];

let cualquierArray: any[] = [12,"hola"];

//## 6. Variables con múltiples tipos de datos específicos:

let stringNumber: string | number = "12";
stringNumber = "ahora soy un string";

console.log(stringNumber);//ahora soy un string

//## 7. Crear tipos de datos personalizados:

type stringOrNumbers = string | number;

let identificacion: stringOrNumbers = 11;
identificacion = "Ahora identificación es un string"
console.log(identificacion); //Ahora identificación es un string
identificacion = 22;
console.log(identificacion); //22

//## 8. let vs var ten TypeScript:

var numero1= 10;
var numero2= 12;

if (numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;
    console.log (`numero1 es ${numero1} y numero2 es ${numero2}`)
    //numero1 es 44 y numero2 es 55
}

console.log (`numero1 es ${numero1} y numero2 es ${numero2}`);
//numero1 es 10 y numero2 es 55


//## 9. Funciones y tipado:

function getNumero(numero = 12): string{
    return "el numero es " + numero;
}

console.log(getNumero(4)); //el numero es 4