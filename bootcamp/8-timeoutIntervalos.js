/////////TIMEOUTS//////////

var timeoutID;

// Función que crea el timeout
function mostrarSaludoDentroDeDosSegundos() {
	timeoutID = setTimeout(slowAlert, 2*1000); 
}
// Función que muestra un alert
function slowAlert() {
   console.log("Hola !!");
}
// Llamamos a la función que crea el timeout
mostrarSaludoDentroDeDosSegundos();

//CANCELAR TIMEOUT: Función que cancela el timeout
function clearAlert() { 
	clearTimeout(timeoutID);
}


/* 

Podemos probar el siguiente código en el navegador:

var timeoutID;
function mostrarSaludoDentroDeDosSegundos() {
	timeoutID = window.setTimeout(slowAlert, 2000); 
}
function slowAlert() {
   alert("Hola !!");
}
mostrarSaludoDentroDeDosSegundos(); 

// Función que cancela el timeout
function clearAlert() { 
	clearTimeout(timeoutID);
}

*/


/////////INTERVALOS//////////
//Es como un timeout, pero su comportamiento se repite en bucle, es decir, ejecuta un código cada vez que pasa un periodo de tiempo
// Variables que almacenan el ID del timeout y el tiempo que ha transcurrido

var intervalID; 
var segundos = 0;

// Función que crea el timeout
function crearIntervaloDeUnSegundo() {
	intervalID = setInterval(imprimirAumentarTiempo, 1000); 
}
// Función que muestra un alert
function imprimirAumentarTiempo() {
  segundos++;
	console.log("Tiempo: " + segundos + " s."); 
}

// Llamamos a la función que crea el timeout
crearIntervaloDeUnSegundo();

//creamos una función para cancelar el intervalo a los 5 segundos
function cancelarIntervalo(){clearInterval(intervalID)};

var cancelarInt;

// Función que crea el timeout
function mostrarSaludoDentroDeDosSegundos() {
	cancelarInt = setTimeout(cancelarIntervalo, 5*1000); 
}


/* 
Podemos probar el siguiente código en el navegador:
/////////INTERVALOS//////////
//Es como un timeout, pero su comportamiento se repite en bucle, es decir, ejecuta un código cada vez que pasa un periodo de tiempo
// Variables que almacenan el ID del timeout y el tiempo que ha transcurrido
var intervalID; 
var segundos = 0;

// Función que crea el timeout
function crearIntervaloDeUnSegundo() {
	intervalID = window.setInterval(imprimirAumentarTiempo, 1000); 
}
// Función que muestra un alert
function imprimirAumentarTiempo() {
  segundos++;
	console.log("Tiempo: " + segundos + " s."); 
}

// Llamamos a la función que crea el timeout
crearIntervaloDeUnSegundo(); */