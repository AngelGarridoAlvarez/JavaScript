var mensaje = "Hola, esto es un mensaje para imprimir en log"; 

console.log(mensaje);

var num1 = 5; var num2 = 10;


/**********************************/

// ASIGNACIÓN
num1 = num2;
console.log(num1); // num1 pasa a valer 10
// asignación y suma (num1 ya no vale el 5 inicial, recordar que ahora vale 10) num1 += num2;
console.log(num1); // num1 pasa a ser 20
// asignación y resta
num1 -= num2;
console.log(num1); // num1 pasa a ser 10
// asignación y multiplicación
num1 *= num2;
console.log(num1); // num1 pasa a ser 100
// asignación y división
num1 /= num2;
console.log(num1); // num1 pasa a ser 10

/**********************************/

//OPERADOR OR ||
var tengoEfectivo = true;
var tengoTarjeta = false;
var puedoPagar = tengoEfectivo || tengoTarjeta; console.log(puedoPagar); // Devuelve true, porque tengo efectivo

//OPERADOR AND &&
var tengoCoche = false;
var tengoCarnetDeConducir = true;
var puedoConducir = tengoCoche || tengoCarnetDeConducir; console.log(puedoConducir); // Devuelve false, porque no tengo coche

// OPERADOR NOT !

!true // => false 
!false // => true


console.log(Text="Probar a cambiar los valores de las variables, para ver las posibles combinaciones")

var tengoDinero = !true; 
var meDaMiedoVolar = !true;
// Puedo ir a Mexico si tengo dinero y NO me da miedo volar 
var puedoIrAMexico = tengoDinero && !meDaMiedoVolar; 
console.log(puedoIrAMexico);

var meTomoUnTranquilizante = true;
// Puedo ir a Mexico si tengo dinero y NO me da miedo volar o me tomo un tranquilizante

var puedoIrAMexico = tengoDinero && (!meDaMiedoVolar || meTomoUnTranquilizante); 

console.log(puedoIrAMexico);


//IF:
// Edad que tenemos
var age = 37;
// Si soy mayor de edad, entonces puedo ser un Vengador 

if (age < 18) {

    // Si mi edad es menor de 18
    
    console.log ("Vaya tendrás que ir con Spedy a jugar al parque"); } else {
                
        // Si mi edad es mayor de 18        
        console.log ("Bienvenido Vengador)"); 
    }


//WHILE

var i = 0;
// Mientras la variable "i" sea menor o igual que 100 

while (i <= 99) {
    console.log (i);
    i=2*i+1; //Suma1alavariablei 
}

//FOR

// Inicializacion: var i = 0
// Condición: si i es menor o igual que 100
// Incremento: por cada iteración, sumale 1 al valor de 'i' // Pista extra: i++ es lo mismo que: i = i + 1
for (var i = 0; i <= 100; 2*(i++)) {
    console.log(i);
}


//ARRAY

var avengers = ["Hulk", "SpiderMan", "AntMan"];

var avenger = avengers[0]; // Probad a cambiar este numero ;) console.log(avenger) // Devuelve "Hulk"

avengers.length; // Devuelve 3

var avengers = ["Hulk", "Thor", "Iron-Man"];
// Iron-Man <-- Posicion: 2 (Elemento más alto de la pila) 
// Thor <-- Posicion: 1
// Hulk <-- Posicion: 0 (Elemento más bajo de la pila)

// PUSH inserta elementos en el ARRAY

var avengers = ["Hulk", "Thor", "Iron-Man"]; 
avengers.push("SpiderMan", "AntMan");
console.log(avengers);
// Imprime ["Hulk", "Thor", "Iron-Man", "SpiderMan", "AntMan"]

// POP elimina elementos en el ARRAY
var avengers = ["Hulk", "Thor", "Iron-Man", "SpiderMan", "AntMan"]; 
avengers.pop();
console.log(avengers);

// Imprime ["Hulk", "Thor", "Iron-Man", "SpiderMan"]

//SORT para ordenar un array. En caso de ser elementos string los ordenará alfabeticamente

var avengers = ["Hulk", "Thor", "Iron-Man", "SpiderMan", "AntMan"]; avengers.sort();
console.log(avengers);
// Imprime ['AntMan', 'Hulk', 'Iron-Man', 'SpiderMan', 'Thor']

//Con este método puedes ordenar los números que te salgan de los cojones, ojo a la diferencia, entre ambos métodos ya que sort simplemenete ordena afabeticamente

var numerosQueMeSalenDeLosHuevos = [044, 037, 120, 001, 015];
numerosQueMeSalenDeLosHuevos.sort();
console.log(numerosQueMeSalenDeLosHuevos);

numerosQueMeSalenDeLosHuevos.sort((a,b)=>b-a);
console.log(numerosQueMeSalenDeLosHuevos);

numerosQueMeSalenDeLosHuevos.sort((a,b)=>a-b);
console.log(numerosQueMeSalenDeLosHuevos);


//Usamos FOR para manipular un dato que no sea último,

var avengers = ["Thor", "Spiderman", "Iron-Man", "Hulk"];
for (var i = 0; i <= avengers.length; i++) {
console.log(avengers[i]); // Imprime los nombres de nuestros vengadores según la posición de i
};

//ahora imprimimos un mensaje personalizado

for (var i = 0; i <= avengers.length; i++) { if(avengers[i] == 'Hulk') {
    console.log('Este vengador se llama ' + avengers[i] + ' y es el más fuerte');
}
}

//aquí nos cargamos a Spiderman y lo cambiamos por AntMan

for (var i = 0; i <= avengers.length; i++) { if(avengers[i] == 'Spiderman') {
    avengers[i] = 'AntMan'; 
};
};

console.log(avengers);


// FUNCTIONS:

// Vamos a crear nuestra primera función! 

function sum(num1, num2) {
    return num1 + num2; 
}
    // Ya tenemos declarada nuestra función para sumar dos números
    var result = sum(2, 2); // Aqui estamos invocando a la función (ejecutándola) 
    console.log(result);  // Y aquí vamos a imprimir el resultado


    //ASIGNAR VARIABLES A FUNCIONES:

    var sayHello = function() { return "Hello!";
};

console.log(sayHello()); // Devuelve "Hello!"

console.log(test):