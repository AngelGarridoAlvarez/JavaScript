/////////OPERADOR TERNARIO//////////

//3 Partes:
           //1:la condición
           //2: valor que regresa si la condición es verdadera
           //3: Valor que regresa si la condición es falsa

let score = 5; //prueba cambiando la nota
let exam = (score >=5 ? 'aprobado' : 'suspendido');
let humour = (exam == 'aprobado' ? 'feliz' : 'triste');

console.log(`He ${exam}, ¡estoy ${humour}!.`);

let amigo = (humour == "triste" ? console.log("No te preocupes amigo, vamos a tomar una cerveza!!") : undefined );


/* puedes probar en el navegador con:

let score = prompt('¿qué nota has sacado?');
exam = ( score >= 6 ? 'aprobado' : 'suspendido');
let humour = (exam == 'aprobado' ? 'feliz' : 'triste');
alert(`He ${exam}, ¡estoy ${humour}!.`);
let amigo = (humour == "triste" ? alert("No te preocupes amigo, vamos a tomar una cerveza!!") : undefined );


*/