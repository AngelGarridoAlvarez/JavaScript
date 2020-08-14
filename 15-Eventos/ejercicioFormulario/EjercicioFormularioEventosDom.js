'use strict'

/*
1. Formulario campos: Nombre, Apellidos y edad
2. Botón enviar formulario
3. Mostrar datos por pantalla
4. Validación del formulario
 */

window.addEventListener('load', function (){
    console.log("DOM cargado");

    let formulario = document.querySelector("#formulario");
    //Selecciono el div que no quiero mostrar hasta que haga submit:
    let box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', ()=>{
        console.log("Evento Submit Capturado");

        //Ahora incorporo la funcionalidad de mostrar los datos por pantalla:

        let nombre = document.querySelector("#nombre").value;
        let apellido = document.querySelector("#apellidos").value;
        let edad = parseInt(document.querySelector("#edad").value);

        //Validación del formulario (.trim hace que ignore los espacios por delante y por detrás.
        if(nombre.trim() == null || nombre.trim().length == 0 || !isNaN(nombre)){
            alert("El nombre no es valido");
            return false;
        }

        if(apellido.trim() == null || apellido.trim().length == 0 || !isNaN(apellido)){
            alert("Los apellidos nos son validos");
            return false;
        }

        if(edad == null || edad <= 0 || isNaN(edad)){
            alert("La edad no es valida");
            return false;
        }

        box_dashed.style.display = "block";//aquí hago que se muestren los estilos del div que contienen las datos cuando se muestran

        let lugarMostrarDatos = document.querySelector("#mostrarDatos");
        let ulMostrarDatos = document.createElement("ul")
        let liMostrarDatos = document.createElement("li")
        let textoMostrarDatos = document.createTextNode(`has seleccionado nombre: ${nombre}, apellidos: ${apellido} y edad: ${edad} años.`);

        lugarMostrarDatos.appendChild(ulMostrarDatos);
        ulMostrarDatos.appendChild(liMostrarDatos);
        liMostrarDatos.appendChild(textoMostrarDatos);
    })

})