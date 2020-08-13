'use strict'

//BOM browser object model

//Saber el tamaño de la pantalla

let width = screen.width;
let height = screen.height;

let where = document.querySelector("#div1");
let what = document.createTextNode(`la altura de la ventana es ${height} y  su ancho es ${width}.`);

where.appendChild(what);

//Con este código introduciríamos el texto directamente dentro de nuestro #div1
//document.querySelector("#div1").appendChild(document.createTextNode(width.toString()));
//document.querySelector("#div1").appendChild(document.createTextNode(height.toString()));

//Con este código introduciríamos otro elemento div dentro de nuestro propio #div1
/*
//1 dónde
let miDiv =document.querySelector("#div1");
//2 elementoHTML que quiero crear para meter el contenido
let div = document.createElement("div");
//3 contenido
let content = document.createTextNode(width.toString());
//4 meto el contenido dentro del elemento HTML - ElementoHTML.appendChild(contenido)
div.appendChild(content);
//5 invoco al elemento en la sección - dónde.appendChild(elementoHTML)
miDiv.appendChild(div);
*/

