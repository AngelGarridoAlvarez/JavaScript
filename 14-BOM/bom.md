# BPM: Browser Object Model

* Trabajar con los elementos del navegador web.
* Saber el tamaño de la pantalla.
* Redirigir a otra página web.


## 1. screen.width y screen.height
Nos permite saber el tamaño de la pantalla.
```jsx
let screenWidth = screen.width;
let screenHeight = screen.height;

let where = document.querySelector("#div1");
let tamañoPantalla = document.createTextNode(`Gracias a screen.width y a screen.height sé que la altura de la pantalla es ${screenHeight} y  su ancho es ${screenWidth} y varía cuando cambio la ventana del navegador de un monitor a otro.`);

where.appendChild(tamañoPantalla);
```
## 2. window.innerWidth y window.innerHeight
Nos permite saber el tamaño de la ventana.
```jsx
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

//Calcular el tamaño de la ventana y meterlo dentro de un elemento p dentro de #div1


//* Paso 1. dónde
//* Paso 2. elementoHTML que quiero crear para meter el contenido
//* Paso 3. contenido
//* Paso 4. meto el contenido dentro del elemento HTML - ElementoHTML.appendChild(contenido)
//* Paso 5. invoco al elemento en mi dónde - dónde.appendChild(elementoHTML)

//let where = document.querySelector("#div1"); este paso ya está hecho
let pElement = document.createElement("p");
let tamañoVentana = document.createTextNode(`Gracias a window.innerHeight y a window.innerWeight sé que la altura de la ventana es ${windowHeight} y  su ancho es ${windowWidth} y varía cuando cambio el tamaño de la ventana y actualizo mi navegador.`);
pElement.appendChild(tamañoVentana);
where.appendChild(pElement);

//Con este código introduciríamos el texto directamente dentro de nuestro #div1
//document.querySelector("#div1").appendChild(document.createTextNode(width.toString()));
//document.querySelector("#div1").appendChild(document.createTextNode(height.toString()));
```

## 3. window.location 

Me muestra el objeto de location con todas las propiedades que puedo sacar.

```jsx
console.log(window.location);

/*
Location
ancestorOrigins: DOMStringList {length: 0}
assign: ƒ assign()
fragmentDirective: FragmentDirective {}
hash: ""
host: "localhost:63342"
hostname: "localhost"
href: "http://localhost:63342/javaScript/13-BOM/bom.html?_ijt=a7pfe8kp63814nrgoctlonk867"
origin: "http://localhost:63342"
pathname: "/javaScript/14-BOM/bom.html"
port: "63342"
protocol: "http:"
reload: ƒ reload()
replace: ƒ replace()
search: "?_ijt=a7pfe8kp63814nrgoctlonk867"
toString: ƒ toString()
valueOf: ƒ valueOf()
Symbol(Symbol.toPrimitive): undefined
__proto__: Location
 */
```

## 4. window.location.href

Redirigir a otra página con window.location

```jsx
let redirect = () => window.location.href = "https://es.wikipedia.org/wiki/Jerez_de_la_Frontera";

//Para usar redirect lo voy a meter dentro de un botón que creo a continuación:
let paradiseBtn = document.createElement(`button`);

//Texto del botón
paradiseBtn.innerHTML = "llévame al paraiso";

//Onclick del botón
paradiseBtn.onclick = redirect;

//Creo el <p> que contiene al botón
let pElement2 = document.createElement("p");

pElement2.appendChild(paradiseBtn);
where.appendChild(pElement2);

where.appendChild(document.createTextNode("este botón usa window.location.href para llevarme a otra pantalla"));
```

## 5. window.open 
Abrir una ventana nueva del navegador

```jsx
// Podemos abrir una pestaña nueva si no especificamos el tamaño de la ventana:

let dameVentana = () => window.open("https://es.wikipedia.org/wiki/Jerez_de_la_Frontera");

//Creo un nuevo botón basado en el anterior para probar la funcionalidad:

let windowBtn = document.createElement(`button`);
windowBtn.onclick = dameVentana;
windowBtn.innerHTML = "Ábreme una pestaña al paraiso";

//Creo el <p> que contiene al botón
let pElement3 = document.createElement("p");
pElement3.appendChild(windowBtn)
where.appendChild(pElement3);
where.appendChild(document.createTextNode("este botón usa window.open(url) para abrir una pestaña nueva a otra pantalla"));

//Podemos abrir una ventana con un tamaño determinado si especificamos el tamaño

let dameVentanaPequeña = () => window.open("https://es.wikipedia.org/wiki/Jerez_de_la_Frontera","","width=700, height=200");

//Creo un nuevo botón basado en el anterior para probar la funcionalidad:

let smallWindowBtn = document.createElement(`button`);
smallWindowBtn.onclick = dameVentanaPequeña;
smallWindowBtn.innerHTML = "Ábreme una ventanita al paraiso";

//Creo el <p> que contiene al botón
let pElement4 = document.createElement("p");
pElement4.appendChild(smallWindowBtn)
where.appendChild(pElement4);
where.appendChild(document.createTextNode("este botón usa window.open(url) para abrir una ventana pequeña a otra pantalla"));
```

Puedes acceder a más funcionalidades del BOM en el siguiente [enlace](https://www.javascripttutorial.net/javascript-bom/#:~:text=Home%20%2F%20JavaScript%20BOM-,JavaScript%20BOM,expose%20the%20web%20browser's%20functionality.)