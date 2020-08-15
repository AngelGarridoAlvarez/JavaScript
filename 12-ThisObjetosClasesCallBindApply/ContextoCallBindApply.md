# Contexto(this): Call, Bind y Apply



## 1.Call
* Pasar el contexto a funciones sin parámetros
* ejemploObjeto.call() recibe los mismos argumentos que ejemploObjeto + el valor que tendrá this que se pasa antes que los demás argumentos

```jsx
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

fantasticFour.miName();// Devuelve - Reed Richards
miFantastic();  // undefined - no recibe el this
miFantastic.call(fantasticFour); //Devuelve - Reed Richards
miFantastic2(); //Hola undefined y undefined, yo soy undefined
miFantastic2.call(fantasticFour, "Sue Storm", "Johnny Storm");
// Devuelve - Hola Sue Storm y Jhonny Storm, yo soy Reed Richards
```

## 2. Apply
* Pasar el contexto a funciones con parámetros

* función.Apply(parámetro1, parámetro2)
    * Parámetro1: El **contexto** (this)
    * Parámetro2: **array** que contendrá los parámetros que se le pasarán a la función.
           
```jsx
           miFantastic.apply(fantasticFour, ["Ángel Puto Amo"]);//devuelve solo Reed Richards por que esta función no tiene parámetros
           miFantastic2.apply(fantasticFour, ["Pepe Neveras", "Cara Rata"]); //Hola Pepe Neveras y Cara Rata, yo soy Reed Richards
```


## 3. Bind

* Pasa los argumentos de un objeto a una función

funciónSinArgumento.Bind(ObjetoConArgumentosQueQuieroPasar)
```jsx
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
```
* Gracias a .bind() podemos usar las funciones dentro de los objetos aplicadas a otros objetos

```jsx
//Objeto Coche
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

//Objeto Moto
var moto = {
    motor: "125cc, gasolina",
    ruedas: 2,
    nombre: "Peugeot",
    modelo: "Speedfight",
    ronear: function() {
        console.log(`Roneando con la ${this.modelo}`) //
    }

}

//Aquí uso una función del objeto coche con los parámetros del objeto moto
coche.arrancar.bind(moto)("el puto amo"); //arrancando Peugeot Speedfight con motor gasolina y 2 ruedas de el puto amo

//Aquí uso una función del objeto moto con los parámetros del objeto coche
moto.ronear.bind(coche)();//Roneando con la BX
```