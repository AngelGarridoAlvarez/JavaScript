//DOM: Documment Object Model

/*¿Qué es el DOM?
El modelo de objeto de documento (DOM) es una interfaz de programación para los documentos HTML y XML. Facilita una representación estructurada del documento y define de qué manera los programas pueden acceder, al fin de modificar, tanto su estructura, estilo y contenido. El DOM da una representación del documento como un grupo de nodos y objetos estructurados que tienen propiedades y métodos. Esencialmente, conecta las páginas web a scripts o lenguajes de programación.

Una página web es un documento. Éste documento puede exhibirse en la ventana de un navegador o también como código fuente HTML. Pero, en los dos casos, es el mismo documento. El modelo de objeto de documento (DOM) proporciona otras formas de presentar, guardar y manipular este mismo documento. El DOM es una representación completamente orientada al objeto de la página web y puede ser modificado con un lenguaje de script como JavaScript.

*/


//EVENTOS EN EL DOM


//Eventos de **ratón**

//- `click`: botón izquierdo del ratón

function funcionalidadClick(){ 
	alert("Acabas de hacer click en el botón.");
}
/*
Lo combinamos con el siguiente codigo html:
 <button class="botones" onclick="funcionalidadClick()">click </button>
*/

//- `mouseover`: pasar el ratón sobre un elemento
function funcionalidadMouseover(){ 
	alert("Acabas de pasar encima del botón mouseover.");
}
//- `mouseout`: sacar el ratón de un elemento
function funcionalidadMouseout(){ 
	alert("Acabas de sacar el puntero del botón mouseout.");
}

//Eventos de **teclado**

//- `keypress`: pulsar una tecla

document.getElementById("keypressEjemplo").addEventListener("keypress", myFunction);

function myFunction() {
  document.getElementById("keypressEjemplo").style.backgroundColor = "lightblue";
  alert(`acabas del pulsar una tecla`);
}


//Sobre **elementos**

//- `focus`: poner el foco (seleccionar) sobre un elemento, por ejemplo un input
//- `blur`: quitar el foco de un elemento
//- `change`: al cambiar el contenido de un input (hay que quitar el foco para que se considere un cambio) o de un select

//**Formularios**

//- `submit`: pulsar el botón submit del formulario
//- `reset`: pulsar el botón reset del formulario

//De la **ventana**

//- `resize`: se ha cambiado el tamaño de la ventana
//- `scroll`: se ha hecho scroll en la ventana o un elemento


