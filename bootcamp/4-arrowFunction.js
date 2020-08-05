//////////Funciones Flecha/////////

var hola = function saludo(name) {
    return `Hola ${name}, ¿cómo estás?.`
}

console.log(hola("Pepe"));

//Con una única sentencia no necesitamos usar "return" ni llaves:
//Si sólo tiene un argumento/parametro podemos obviar los paréntesis del argumento/parametro

hola2 = name => `Hola ${name}, ¿cómo estás?.`;

console.log(hola2("Manu"));

//En cambio si no hay ningún argumento o hay más de uno tendermos que usar paréntesis
//////////Necesitamos usar llaves" y paréntesis si tenemos que devolver un objeto////////

hola3 = () => ({ saludoNormal: "Hola, ¿Cómo estás", saludoEducado: "Buenos días, ¿Cómo está usted?" })
console.log(hola3());
console.log(hola3().saludoEducado);

//Podemos asignar valores por defecto:
hola4 = (name1 = "Pepito", name2 = "José") => `Hola Don ${name1}, hola Don ${name2}, ¿Pasó usted ya por casa?...`;

console.log(hola4());
console.log(hola4("Pancracio", "Manuel"));

//High order functions (función con return dentro de función con return) se simplifican con arrow funcion

function dameMas(a, b) {
    return function dameMenos(c, d){
        return `dame más ${a} y ${b} pero dame menos ${c} y ${d}`
    }
}

console.log(dameMas("azucar","limon")("sal","tequila")); //dame más azucar y limon pero dame menos sal y tequila

//otra forma habitual de simplificar es dar numbres de variables a las funciones:
var mas = dameMas("melón","sandía");
var menos =mas("azucar", "turrón");

console.log(menos)

//Con la arrow funciton pasaría a ser:

dameMas2 = (a,b) => (c,d) => `dame más ${a} y ${b} pero dame menos ${c} y ${d}`

console.log(dameMas2("cariños","abrazos")("calor","el coñazo"))


////////////////LIMITACIONES FUNCIONES ARROW///////////////////

/* 
No permiten crear objetos;
Ignoran Call y Apply;
No reconocen la palabra yield (no permiten funciones generadoras);*/