/*
El **DOM** es un conjunto de utilidades específicamente diseñadas para **manipular documentos** XML, y por tanto documentos **HTML**. El DOM **transforma** el archivo **HTML** en un **árbol de nodos jerárquico**, fácilmente manipulable. Los nodos más importantes son:

- **Document**: Representa el **nodo raíz**. Todo el documento HTML.
- **Element**: Representa el **contenido** definido por un par de **etiquetas** de apertura y cierre, lo que se conoce como un tag HTML. **Puede tener como hijos más nodos de tipo Element y también atributos**.
- **Attr**: Representa el **atributo** de un elemento.
- **Text**: Almacena el **contenido del texto** que se encuentra **entre** una **etiqueta** HTML de **apertura** y **cierre**.

*/

//Buscando en el DOM

//Para poder **recorrer** el **DOM**, lo podemos hacer a través de un API JavaScript con métodos para acceder y manipular los nodos. Algunas de estas funciones son:

//- getElementById(id):** Devuelve el **elemento** con un **id** especifico.

function getElementByIdFun() {
	document.getElementById("pepinillo").innerHTML = "Toma ya!!!";
	alert("toma ya!!!")
}

function changeColor(newColor) {
	var elem = document.getElementById('para');
	elem.style.color = newColor;
}



//- getElementsByName(name)**: Devuelve los **elementos** que un **name** específico.
//- getElementsByTagName(tagname)**: Devuelve los **elementos** con un nombre de **tag** específico.
//- getElementsByClassName(classname)**: Devuelve los **elementos** con un nombre de **clase** específico.
//- getAttribute(attributeName)**: Devuelve el valor del **atributo** con nombre **attributeName**
//- querySelector(selector):** Devuelve un único **elemento** que corresponda con el **selector** , ya sea por **tag, id, o clase**.
//- querySelectorAll(selector):** Devuelve un **array** con los **elementos** que correspondan con la query **introducida en selector**.



// Manipulando el DOM

//De igual manera podemos **manipular** el **DOM** con las siguientes funciones:

//**createElement(name):** Crea un **elemento** HTML con el **nombre** que le pasemos en el **parámetro** name.


function addText() {
	let newLi = document.createElement("LI"); //declaramos crear un nuevo elemente en la lista Li

	let dogTest = document.createTextNode("Guau guau!!!");

	newLi.appendChild(dogTest); //declaramos cerar un nuevo elemento de la lista con una imagen de perro

	document.getElementById("melocoton").appendChild(newLi);

}


function addImg() {
	let newLi = document.createElement("LI");
	var dogImg = document.createElement("img");
	dogImg.src = "images/dog.jpg";
	document.getElementById("melocoton").appendChild(newLi).appendChild(dogImg);

}



//**createTextNode(text)**: Crea un **nodo** de **texto** que puede ser **añadido** a un **elemento HTML**.

//**createTextAttribute(attribute)**: Crea un **atributo** que puede ser **añadido posteriormente** a un **elemento** HTML.

function creaTA() {
  var h2 = document.getElementsByTagName("H2")[2];
  var att = document.createAttribute("class");
  att.value = "democlass";
  h2.setAttributeNode(att);
}



//**appendChild(node):** Nos permite **hacer hijo un elemento a otro**.


//**insertBefore(new, target)**: Permite **insertar** un **elemento** o nodo new **antes del indicado en target .**

//**removeAttribute(attribute)**: **Elimina** el **atributo** de nombre attribute del nodo desde el que se le llama.

//**removeChild(child): Elimina** el **nodo** **hijo** que se indica con child


//**replaceChild(new, old)**: **Reemplaza** el nodo old por el que se indica en el parámetro new.