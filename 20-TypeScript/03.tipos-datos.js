// #Tipos de datos en TypeScript:
//## 1.string
// tsc -w .\03.tipos-datos.ts
var cadena = "Ángel Garrido Álvarez";
console.log(cadena); // Ángel Garrido Álvarez
/*
cadena = 5;

Al trancriptar a js me da el siguiente error:

03.tipos-datos.ts:11:1 - error TS2322: Type 'number' is not assignable to type 'string'.

11 cadena = 5;
 */
//## 2. number
var numero = 12;
//## 3. boolean
var booleano = true;
//## 4. any
var cualquiera = "hola";
cualquiera = 5;
console.log(cadena, numero, booleano, cualquiera); //Ángel Garrido Álvarez 12 true 5
//## 5. array
var lenguajes = ["JavaScript", "PHP", "CSS", "HTML"];
var years = [22, 33, 44];
var cualquierArray = [12, "hola"];
//## 6. Variables con múltiples tipos de datos específicos:
var stringNumber = "12";
stringNumber = "ahora soy un string";
console.log(stringNumber); //ahora soy un string
var identificacion = 11;
identificacion = "Ahora identificación es un string";
console.log(identificacion); //Ahora identificación es un string
identificacion = 22;
console.log(identificacion); //22
//## 8. let vs var ten TypeScript:
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 55;
    console.log("numero1 es " + numero1_1 + " y numero2 es " + numero2);
    //numero1 es 44 y numero2 es 55
}
console.log("numero1 es " + numero1 + " y numero2 es " + numero2);
//numero1 es 10 y numero2 es 55
//## 9. Funciones y tipado:
function getNumero(numero) {
    if (numero === void 0) { numero = 12; }
    return "el numero es " + numero;
}
console.log(getNumero(4)); //el numero es 4
