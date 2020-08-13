//////// IF, ELSE IF, ELSE  ////////


function diametro(diametroRueda) {
    if (diametroRueda <= 10) {
        console.log("es una rueda para un juguete pequeño");
    }

    else if (diametroRueda < 10 && diametroRueda < 20) {
        console.log("es una rueda para un juguete mediano");
    }

    else {
        console.log("es una rueda para un juguete grande")
    }

}

diametro(5);
diametro(15);
diametro(30);

//////// SWITCH  ////////

//"Si...coincide haz ...sino coincide nunca default ...".

//El siguiente código lo puedes probar en la consola de un navegador

/* 

var name = prompt("Elije tu líder favorito: Donatello, Murdock y Optimus Price ");
var team;

switch (name) {
    case "Donatello":
        team = "las Tortugas Ninja";
        boss = true;
        break;
    case "Murdock":
        team = "El Equipo A";
        boss = false;
        break;
    case "Optimus Prime":
        team = "los Transformers";
        boss = true;
        break;
}

alert(`tu personaje favorito es ${name} de ${team} y es ${boss} que es un lider`);

*/
