//Juega con el DOM inventando una lista en la que puedas añadir y eliminar elementos

'use strict'

let escritorio = ["post-it", "lap-top", "controller", "mouse", "pen", "highlighter", "hydrogel"];
console.log(escritorio);

//Añadir elemento
let add = () => {
let addElement = prompt("añade un elemento al array","cosa");
while (!isNaN(addElement)){
    alert("Tienes que introducir una cadena de texto")
    addElement = prompt("añade un elemento al array")
}
escritorio.push(addElement)

document.write(`<h2>Elementos que hay en tu escritorio</h2> <ul>`);

escritorio.forEach(element => document.write(`<li>${element}</li>`));

document.write(`</ul><button onclick="add()"> añade otro elemento</button>`);
document.write(`</ul><button onclick="pop()"> elimina el último elemento</button>`);
document.write(`</ul><button onclick="shift()"> elimina el primer elemento</button>`);
}
add()
let pop = (element) => {
    alert("eliminado el último elemento del array")
    escritorio.pop()
    escritorio.forEach(element => document.write(`<li>${element}</li>`));
    document.write(`</ul><button onclick="add()"> añade el último elemento</button>`);
    document.write(`</ul><button onclick="pop()"> elimina el último elemento</button>`);
    document.write(`</ul><button onclick="shift()"> elimina el primer elemento</button>`);

};

let shift = (element) => {
    alert("eliminado primer elemento del array")
    escritorio.shift()
    escritorio.forEach(element => document.write(`<li>${element}</li>`));
    document.write(`</ul><button onclick="add()"> añade otro elemento</button>`);
    document.write(`</ul><button onclick="pop()"> elimina el último elemento</button>`)
    document.write(`</ul><button onclick="shift()"> elimina el primer elemento</button>`);
};
