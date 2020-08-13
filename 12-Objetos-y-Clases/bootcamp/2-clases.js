//////////*CLASES*///////////////// 


//son declaraciones de objetos/abstracciones de objetos
//La primera letra de las clases se pone en mayúscula:

class Coche {
    constructor(marca, modelo, año, ) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    arrancarCoche() { //no hace falta declarar los métodos en las clases
        console.log(`El ${this.marca} ${this.modelo} de ${this.año} está arrancando`);
    }

}


//INSTANCIAR es crear objetos a partir de una clase existente
var mazda = new Coche("mazda", "mx-30", "2020");
var renault = new Coche("renault", "laguna", "2019");

//Podemos acceder a las diferentes propiedades de los objetos:
console.log(mazda);
console.log(Coche.marca);
console.log(mazda.marca);
mazda.arrancarCoche();
renault.arrancarCoche();


////////////* AÑADIR PROPIEDADES ADICIONALES*////////////////


//Podemos añadir propiedades a un objeto adicionales a la clase, aunque siempre buscaremos Clases que definan todas las propiedades de sus objetos instanciados

mazda.propietario = "Juan Manuel Boñigo";
console.log(mazda);



////////////* AÑADIR VALORES POR DEFECTO*////////////////

//Podemos establecer valores por defecto a las propiedades de las clases;

class Moto { //dentro del paréntesis de la función solo aparecen los parametros de las propiedades que no están predefinidas
    constructor(marca, modelo, propietario, ruedas) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = 2019;
        this.tipo = "superbike";
        this.propietario = propietario;
        this.ruedas= ruedas;
    }

    ronear() {
        console.log(`Roneando con la ${this.marca} ${this.modelo} del señorito ${this.propietario}`);
    }

    static ronronear() { //ronronear es un método estático, esto quiere decir que se puede invocar con Moto.ronronear(), pero las subclases no van a heredar esta función y no van a poder ejecutarla
        console.log(`la ${this.marca} ${this.modelo} del señorito ${this.propietario} ronronea como una gata en celo`)
    }
};

var kawa = new Moto("Suzuky", "Kawasaki", "Ángel Puto Amo");
console.log(kawa);
//si quiero cambiar las otras propiedades predifinidas lo tengo que hacer manualmente

kawa.ronear();

kawa.tipo = "Chopper"; //aquí cambiamos el tipo predefinido
kawa.accesorios = "Bahul trasero"; //añadimos una propiedad que no tenía la clase

console.log(kawa);

////////////////////////* HERENCIA *///////////////////////////////
//Crear una clase nueva a partir de una exitente --> SUBCLASES
//usamos "class + nuevaClase + extends + ClaseHeredada" para heredar la clase y super para invocar al constructor

class Scooter extends Moto {
    constructor(marca, modelo, propietario) { //en contrsuctor hay que seguir poniendo los parametros que no estén predefinidos
        super(marca, modelo, propietario, 2); //en super hay que poner los parametros de la clase moto, si alguno queremos que tenga valor predefinido es el momento de ponerlo
        this.accesorios = "bahúl"; //Aquí podemos añadir propiedades que no estén incluidas en la clase moto
        this.guantera = true;
        this.tipo = "Scooter";
    }
}

var miller = new Scooter("Kymco", "Miller","Ángel el Dios Supremo del JavaScript");
var motoIndefinida = new Scooter; //esto nos sirve para logearlo y ver los parametros que tiene predefinidos


console.log(Scooter);
console.log(miller);
console.log(motoIndefinida);
miller.ronear(); // comprobamos que las clases heredadas como Scooter también heredan las funciones
Moto.ronronear(); //ronronear al ser un método estático solo se puede invocar desde la clase moto donde está definido
Moto.ronronear("Kymco","miller","su señoría Ángel Garrido", 2); //aunque ponga variables, la función estática no las coge
// miller.ronronear(); --> si ejecutamos ete comando em dará error, ya que ronronear no es una función de miller


