
///////////// .CALL() .APPLY y BIND()- CONTEXTO //////////////////


//CALL: ejemploObjeto.call() recibe los mismos argumentos que la ejemploObjeto + el valor que tendrá this que se pasa antes que los demás argumentos


var fantasticFour = {
    nombre: "Reed Richards",
    miName: function () {
        console.log(this.nombre);
    },

    saludar: function (amigo1, amigo2) {
        console.log("Hola " + amigo1 + " y " + amigo2 + ", yo soy " + this.nombre);
    },
};


var miFantastic = fantasticFour.miName;
var miFantastic2 = fantasticFour.saludar;


miFantastic();  // Devuelve - undefined por no recibe el this
fantasticFour.miName();// Devuelve - Reed Richards
miFantastic.call(fantasticFour); //Devuelve - Reed Richards
miFantastic2(); //Hola undefined y undefined, yo soy undefined
miFantastic2.call(fantasticFour, "Sue Storm", "Johnny Storm");
// Devuelve - Hola Sue Storm y Jhonny Storm, yo soy Reed Richards

///////////////////////.APPLY()//////////////////////////////

//El método .***apply()*** actúa de forma bastante **similar** a .***call()***, pero con una variación, solo recibe 2 argumentos:
           //1º: el **contexto** (this)
           //2º será **un array** que contendrá los argumentos que se le pasarán a la función.

           miFantastic.apply(fantasticFour, ["Ángel Puto Amo"]);//devuelve solo Reed Richards por que esta función no tiene argumentos (parametros dentro del paraentesis de function().)
           miFantastic2.apply(fantasticFour, ["Pepe Neveras", "Cara Rata"]); //Hola Pepe Neveras y Cara Rata, yo soy Reed Richards



///////////////////////.BIND()////////////////////////////// 

//Lo usamos cuando queremos compartir la función de un objeto para que otro la utilice pero con sus propios argumentos

//fun-varSinArgumento.Bind(fun-varConContextoQueQuieroPasar)

var Birdmen = {
    nombre: "Gorrión-Man",
    apodo: "Pajarraco Urbano",
};


function myBirdmen() {
    console.log(`Mi birdman favorito es ${this.nombre} y su apodo es ${this.apodo}`);
};

myBirdmen(); //Devuelve Mi birdman favorito es undefined y su apodo es undefined
myBirdmen.bind(Birdmen); //no devuelve nada, con esto no se está llamando a la función
myBirdmen.bind(Birdmen)();//Mi birdman favorito es Gorrión-Man y su apodo es Pajarraco Urbano

var myBirdmenBind = myBirdmen.bind(Birdmen);
myBirdmenBind();//Mi birdman favorito es Gorrión-Man y su apodo es Pajarraco Urbano

var coche = {
    motor: "diesel",
    ruedas: 4,
    nombre: "Citröen",
    modelo: "BX",
    arrancar: function(propietario) {
        console.log(`arrancando ${this.nombre} ${this.modelo} con motor ${this.motor} y ${this.ruedas} ruedas de ${propietario}`);
    }
}

coche.arrancar("Ángel");

var moto = {
    motor: "125cc, gasolina",
    ruedas: 2,
    nombre: "Peugeot",
    modelo: "Speedfight",
    ronear: function() {
        console.log(`Roneando con la ${this.modelo}`) //
    }

}
moto.ronear(); //Roneando con la Speedfight

//Gracias a .bind() podemos usar las funciones dentro de los objetos aplicadas a otros objetos

coche.arrancar.bind(moto)("el puto amo"); //arrancando Peugeot Speedfight con motor gasolina y 2 ruedas de el puto amo
moto.ronear.bind(coche)();//Roneando con la BX