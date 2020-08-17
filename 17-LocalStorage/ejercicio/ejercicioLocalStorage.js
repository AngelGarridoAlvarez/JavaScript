'use strict'

//Enunciado:
//Haz un formulario que te permita agregar películas a una lista usando localStorage y otro que te permita borrarlos


//Vamos a capturar el evento onSubmit

let formulario = document.querySelector("#formpeliculas");

//Añadimos al localStorage nuestra película
formulario.addEventListener('submit', () => {
    let titulo = document.querySelector("#addpelicula").value;
    if(titulo.length >= 1){ //con este if evito que me guarde valores vacíos
        localStorage.setItem(titulo, titulo);//(key, value)

    }
});

//Ahora vamos a mostrar todos mis elementos del localStorage usando for in
let ul = document.querySelector("#peliculaslist");
for(let i in localStorage){
    console.log(localStorage[i]);
    let li = document.createElement("li");
    if(typeof localStorage[i] == "string") {
        li.append(localStorage[i]);
        ul.appendChild(li);
    }
};




//Añadimos la funcionalidad de borra películas

let formularioBorrar = document.querySelector("#borrarPeliculaForm");

formularioBorrar.addEventListener('submit', () => {
    let titulo = document.querySelector("#borrarPelicula").value;
    if(titulo.length >= 1){ //con este if evito que me guarde valores vacíos
        localStorage.removeItem(titulo);//(key)

    }
});