'use strict'

//# Fetch (ajax) y peticiones a servicios / apis REST


//## <u>Fetch</u>
//* Es una manera de hacer peticiones a un backend.
//* Es una novedad de JavaScript que permite hacer peticiones AJAX de forma más sencilla.
//* Petición AJAX: llamada a un servicio REST (API o Backend) con el que vamos a obtener datos.
//* (REST representational state transfer - get post put delete - desarrolladores no necesitan descargarse librerías ni software adicional para poder aprovechar del diseño de una API REST - Application Programming Interface).

//* Vamos a utilizar [reqres.in](https://reqres.in/) para probar fetch
//  * Es un backend que nos devuelve peticiones en JSON


//Hacemos una petición de los usuarios a reqres.in
//* Fetch es una promesa, se queda a la espera de que pase algo
//* then(callback) es un método de Fetch. cuando se cumple la promesa, <u>**entonces**</u> hacemos el callback que meto dentro de .then()

// ## 2. Promesas y Fetch
//
// * Las promesas son muy útiles para evitar el *"callback hell"* (un callback dentro de otro callback, dentro de otro callback...).
// * Útiles para trabajar con datos asíncronos: peticiones AJAX a API REST
// * Puede pasar que tengamos varias peticiones AJAX que tenemos que esperar a que se ejecute una para poder ejecutar otra, para lo que son muy utiles las promesas.


let ulUsuarios = document.querySelector("#usuarios");
let usuariosData = [];//creo un array
let divProfesor =document.querySelector("#profesor")

ulUsuarios.innerHTML = '<span id="cargando">CARGANDO...</span>';//voy a mostrar este mensaje hasta que se cargue la información
let page = prompt('introduce el número de página (1 o 2)');

getUsuarios(page)//Esta función hace la petición para traernos los datos que queremos
    .then(response => response.json())//cuando se cumple la promesa los datos que recibo y que llamo response los paso a formato JSON
    .then(users => { // recojo los datos pasados a json en users y trabajo con ellos
        console.log(users)//compruebo que me sale un objeto del que solo me interesa data
        usuariosData = users.data;//Meto en mi array usuarios users.data (data porque así se llama en la api)
        console.log(usuariosData);//Compruebo que en usuariosData que recogido con el fetch los datos que quería
        usersList(users.data);//Con esta función voy a a iterar el array usuariosData con .map()
        return getInfo();
    })
    .then(data => { //data es el return del getInfo
        divProfesor.innerHTML = data;
        console.log(data);
        let userId = prompt('introduce el número de usuario (del 1 al 12)');
        return getUsuario(userId);
    })
    .then(data => data.json())
    .then(user => {
        mostrarUsuario(user.data);
    })
    .catch(error => { // con el método catch capturo los errores
        alert(error + " He capturado el error con .catch()")
    });

function getUsuarios(page) {
    return fetch(`https://reqres.in/api/users?page=${page}`)//Hacemos la petición para traernos los datos de los usuarios
};

function getUsuario(userId) {
    return fetch(`https://reqres.in/api/users/${userId}`)
}

function usersList(users) {
    //por cada elemento del array ejecutará la función que le pase dentro del map
    usuariosData.map((usuario, i) => {
        let liNombreMasFoto = document.createElement('li');//Por cada elemento voy a crear una etiqueta li
        ulUsuarios.appendChild(liNombreMasFoto)
        liNombreMasFoto.innerHTML = `El elemento ${i} corresponde al usuario ${usuario.first_name} <p><img src = "${usuario.avatar}"></p>`;
        document.querySelector("#cargando").style.display = 'none';//dejo de mostrar el mensaje de cargando con esta linea de código
    })
};

function mostrarUsuario(usuario) {
    //por cada elemento del array ejecutará la función que le pase dentro del map
    let divUsuarioConcreto = document.querySelector("#usuarioConcreto");
    divUsuarioConcreto.innerHTML = ` usuario ${usuario.first_name} <p><img src = "${usuario.avatar}"></p>`;
    document.querySelector("#cargando").style.display = 'none';//dejo de mostrar el mensaje de cargando con esta linea de código
};

//* A continuación vamos a crear una promesa, hago mi lógica en getInfo() y luego lo encadeno con un getInfo
//* Las promesas me evitan tener que hacer un callback dentro de otro callback para que la función se espere a que reciba los datos

function getInfo(){

    let profesor = {
        nombre: "Rosendo",
        apellidos: "Chas",
        url: "https://pro.upgrade-hub.com/"
    };
    //Así creamos una promesa para incorporar a nuestra lista de promesas y evitar el callback hell
    return new Promise((resolve, reject) => {
        let profesorString = "";
        setTimeout(function (){
            profesorString = JSON.stringify(profesor);
            if(typeof (profesorString) != "string" || profesorString == "") return reject('error');
            //No ponemos else porque si se ejectua un return la función no sigue funcionando
            return resolve(profesorString)

        }, 3*1000);
    });
}
