// Definimos un objeto con los datos de una persona 

var persona = {
    nombre: "Peter",
    apellidos: "Parker",
    pais: "USA",
    profesion: "Student"
}
// Accedemos a sus propiedades
console.log("La persona se llama " + persona['nombre']); console.log("Y es " + persona['profesion']);
console.log("La persona se llama " + persona['nombre'] + " y es " + persona['profesion']);




//HERENCIA --> Una clase nueva se crea a partir de una clase existente;

class Vehiculo {
    constructor(tipo, nombre, ruedas) {
        this.tipo = tipo; this.nombre = nombre; this.ruedas = ruedas
    }
    getRuedas() {
        console.log(this.ruedas);
    }
    arrancar() {
        console.log("Arrancando el " + this.nombre);
    } aparcar() {
        console.log("Aparcando el " + this.nombre);
    }
}
console.log(Vehiculo);

//HEREDAR UNA CLASE:

class Coche extends Vehiculo {
    constructor(nombre) {
        super('coche', nombre, 4);
    }
}


var beetle = new Coche('Volkswagen Beetle'); 
beetle.getRuedas(); // 4
beetle.arrancar(); // Arrancando el beetle
beetle.aparcar();
