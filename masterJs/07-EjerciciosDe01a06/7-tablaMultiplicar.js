//Hacer la tabla de multiplicar de un número introducido por pantalla

'use strict'

function tablaMultiplicar() {
    var num = parseInt(prompt("Introduce un número para que aparezca la tabla de multiplicar", "0"));

    while (isNaN(num)) {
        alert("Tienes que introducir un número para poder multiplicarlo, las letras y las palabras no se pueden multiplicar gilipollas");
        num = parseInt(prompt("Introduce un número para que aparezca la tabla de multiplicar", "0"));

    }

    document.write(`<h2>Tabla del ${num}</h2>`);
    for (let i = 1; i <= 10; i++) {
        document.write(`${num} x ${i} = ${num * i} </br>`)
    }
    let repeat = confirm("¿Quieres seguir multiplicando?");

    if (repeat == true) {
        tablaMultiplicar()
    } else {
        document.write("<p>Ya no hay que multiplicar nada más</p>")
    }
}

tablaMultiplicar()

