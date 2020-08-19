//Haz tres botones que al pulsarse  muestren una lista de contenidos de tres APIS diferentes:

'use strict'

let buttonPlace = document.querySelector("#botonera");
let button1 = document.createElement("button");
buttonPlace.appendChild(button1);
button1.textContent = "Rick y Morty"
button1.onclick = () => {
    let olCharacters = document.querySelector("#div1");
    let charactersData = [];

    fetch('https://rickandmortyapi.com/api/character/')
        .then(data => data.json())
        .then(charcaters => {
            console.log(charcaters);//Ok, me salen todos los personajesblob:
            charactersData = charcaters.results //meto los datos obtenidos en el array charactersData, el atributo results lo he sacado de la API
            console.log(charactersData);//undefined
            charactersData.map((character, i) => {
                let liNombreMasFoto = document.createElement('li');
                liNombreMasFoto.innerHTML = `El personaje ${character.id} es ${character.name} <p><img src = "${character.image}"></p>`;
                olCharacters.appendChild(liNombreMasFoto)
            })
        });
};



let button2 = document.createElement("button");
let newP = document.createElement("p");
newP.appendChild(button2)
buttonPlace.appendChild(newP);
button2.textContent = "JSON Place Holder"
button2.onclick = () => {
    let olCharacters = document.querySelector("#div2");
    let usersData = [];

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(data => data.json())
        .then(users => {
            console.log(users);//Ok, me salen todos los users:
            usersData = users //meto los datos obtenidos en un array, en este caso no tengo que especificar ningún atributo tipo users.data ya que la dirección que hemos puesto en el fetch me da los datos que necesito directamente
            console.log(usersData);//
            usersData.map((user, i) => {
                let liDatos = document.createElement('li');
                liDatos.innerHTML = `El usuario ${user.id} es ${user.name}, su nombre de usuario es ${user.username} y su email es ${user.email}`;
                olCharacters.appendChild(liDatos)
            })
        });
};


let button3 = document.createElement("button");//creo botón 3
let newP2 = document.createElement("p");//creo una p que va  contener al botón
buttonPlace.appendChild(newP2);//meto la p en el lugar que hemos creado para los botones
newP2.appendChild(button3) //me el botón 3 en su p
button3.textContent = "Game of thrones";
button3.onclick = () => {
    let arrayDatosGOT = [];//el array donde voy a meter los datos
    let olGOTPlace = document.getElementById("div3");//El sitio donde voy a poner los datos
    let olGOT = document.createElement("ol");//La lista ordenada donde voy a meter los elementos
    olGOTPlace.appendChild(olGOT); //meto el elemento lista dentro del sitio que le hemos designado

    fetch('https://api.got.show/api/show/characters')
        .then(gotData => gotData.json())//Recojo los datos de la API y los paso los datos de la promesa a JSON
        .then(characters =>{//Recojo los datos en formato JSON y opero con ellos
            console.log(characters);//Compruebo que he capturado los json que quiero
            arrayDatosGOT = characters;//Meto los datos JSON en mi array para poder iterarlo y operar con ellos
            arrayDatosGOT.map((personaje, i) => { //con map vamos a transformar el array datos en lo que ponga en la función
                let liGOT = document.createElement("li");//creo la etiqueta li para cada elemento
                olGOT.appendChild(liGOT)//meto las etiquetas li dentro del elemento lista olGOT que he creado antes
                liGOT.innerHTML = `El personaje ${i} es ${personaje.name} - ${personaje.house} - Primera aparición: ${personaje.first_seen} <p><img src = '${personaje.image}'></p>`;
            })
        })
}
