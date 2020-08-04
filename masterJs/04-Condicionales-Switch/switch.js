'use strict'

//switch

var edad = "";
var imprime = "";

switch(edad) {
    case 18:
        imprime = "acabas de cumplir la mayoría de edad";
        break;
    case 25:
        imprime = `Tienes ${edad}, por el culo te la hinco`;
        break;
    case 40:
        imprime = "Crisis de los 40";
        break;
    case 75:
        imprime = "estás jodido";
    default:
        imprime = "tu edad es neutra"
        break;
}

console.log(imprime);
