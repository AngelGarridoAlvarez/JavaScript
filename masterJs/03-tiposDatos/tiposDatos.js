var falseNumber = "44.33"; //no es un número, es un string
console.log(falseNumber);//44.33
console.log(falseNumber+3); //44.333 lo concatena, no lo suma
console.log(Number(falseNumber)+3)//47.33 pasa el string a número
console.log(parseInt(falseNumber))// 44 pasa falseNumber a número entero
console.log(parseFloat(falseNumber));// 44.33 pasa el número a decimal
console.log(String(44+33));// Pasa el número a string
console.log(typeof (falseNumber));// string