# This, Objetos y Clases

## 1. This
Es una forma de referirnos al objeto en el que nos encontramos a la hora de llamar a propiedades y métodos.

```jsx
'use strict'

//El operador this hace referencia al objeto en el que se encuentra en ese momento:

let objetoMechero = {
    marca: "bic",
    precio: 1 + "€",
    color: "rosa",
    descripcion(){console.log(`tengo un mechero ${this.marca} de color ${this.color} que cuesta ${this.precio}`)}
//Podemos expresar este método sin el this: 
//  descripcion(){console.log(`tengo un mechero ${objetoMechero.marca} de color ${objetoMechero.color} que cuesta ${objetoMechero.precio}`)}
//Problema de no usar this: si crearamos otros objeto a partir de una clase o si renombraramos el objeto el método ya no nos valdria

}

objetoMechero.descripcion()//tengo un mechero bic de color rosa que cuesta 1€
//Si no pusieramos this daría error
```

## 2. Objetos

* Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. Un valor de una propiedad puede ser una función, en cuyo caso la propiedad es conocida como un método. Además de los objetos que están predefinidos en el navegador, puedes definir tus propios objetos.

* CREAMOS UN OBJETO:

```jsx
var marca = "mercedes";

var coche = {

    //PROPIEDADES: no hay que usar, var, let o const para declararlas
    marca: "reanult",
    año: 2020,
    modelo: "cactus",


    //MÉTODOS: no hay que usar function para declararlos
    verModelo: function () { //las funciones dentro de los objetos se denominan métodos
        return this.modelo;// si no ponemos this buscaría modelo fuera del objeto coche
    },
    verMarca: function () { //si no pusieramos this, me devolvería la marca mercedes en lugar de renault
        return this.marca;
    },

    //cuando hacemos this.marca es como si estuviéramos haciendo coche.marca

    verMarcaSinThis: () => marca,//me devuelve mercedes porque definí la var fuera del objeto coche, si no estuviera esa var definida me devolvería error
    verMarcaSinThisCorrectamente: () => coche.marca,//Me devuelve renault, pero si creo otro objeto a partir de coche voy a tener un problema

    verMarcaFlecha: () => this.marca, //al hacer la función flecha el this no funciona, como no encuentra marca me devolvería undefined
    verMarcaFlecha2: function () { //en cambio si metemos una función fecha dentro de otra función si coge el ámbito que le corresponde
        let f = () => this.marca;
        return f();
    },
    verMarcaError: function () {
        return marca;
        //aquí no hemos puesto this, por lo que me devolver mercedes en lugar de renault
    },
    verThis: function () {
        return this;
    },

    verThisFlecha1: () => {
        return this.marca;
    },

};


console.log(coche.verMarcaFlecha());//undefined --> el this no funciona con arrow functions
console.log(coche.verMarcaFlecha2());//renault
console.log(coche.verThis());//me devuelve el objeto coche completo
console.log(coche.verThisFlecha1());//undefined --> el this no funciona con arrow functions
console.log(coche.verMarcaSinThis());//Me devuelve mercedes en lugar de renault por no utilizar this
console.log(coche.verMarcaSinThisCorrectamente());//renault

```
## 3. CLASES 


* Son modelos constructores de objetos.
* Son declaraciones de objetos/abstracciones de objetos.
* Primera letra de las clases se pone en mayúscula:

```jsx
class Coche {
    constructor(marca, modelo, año,) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    arrancarCoche() { //no hace falta declarar los métodos en las clases
        console.log(`El ${this.marca} ${this.modelo} de ${this.año} está arrancando`);
    }

}
```


## 3.1 INSTANCIAR: crear objetos a partir de una clase existente


```jsx
var mazda = new Coche("mazda", "mx-30", "2020");
var renault = new Coche("renault", "laguna", "2019");

//Podemos acceder a las diferentes propiedades de los objetos:
console.log(mazda);//Coche { marca: 'mazda', modelo: 'mx-30', 'año': '2020' }
console.log(Coche.marca);//undefined
console.log(mazda.marca);//mazda
mazda.arrancarCoche();//El mazda mx-30 de 2020 está arrancando
renault.arrancarCoche();//El renault laguna de 2019 está arrancando
```
## 3.2 Añadir parámetros adicionales

* Podemos añadir parámetros a un objeto que no estaban predefinidos en su clase, aunque siempre buscaremos Clases que definan todas las propiedades de sus objetos instanciados.
```jsx
mazda.propietario = "Juan Manuel Boñigo";
```


## 3.3 Añadir valores por defecto

Se pueden añadir valores por defecto a los parámetros. Los parámetros con valores por defecto no tiene por que aparecer en el constructor, aunque también se pueden poner.

##3.3. Métodos estáticos
* Son métodos que solo se pueden invocar desde la clase principal y que las subclases no van a heredar
* static myMethod() { };
```jsx
class Moto { //dentro del paréntesis de la función solo aparecen los parámetros de las propiedades que no están predefinidas
    constructor(marca, modelo, propietario, ruedas) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = 2019;
        this.tipo = "superbike";
        this.propietario = propietario;
        this.ruedas = ruedas;
    }

    ronear() {
        console.log(`Roneando con la ${this.marca} ${this.modelo} del señorito ${this.propietario}`);
    }

    static ronronear(marca, modelo, propietario) { //ronronear es un método estático, esto quiere decir que se puede invocar con Moto.ronronear(), pero las subclases no van a heredar esta función y no van a poder ejecutarla
        console.log(`la ${marca} ${modelo} del señorito ${propietario} ronronea como una gata en celo`)
    }
};

var kawa = new Moto("Suzuky", "Kawasaki", "Ángel Puto Amo");

console.log(kawa);//me saca por pantalla el objeto competo
kawa.ronear();//Roneando con la Suzuky Kawasaki del señorito Ángel Puto Amo
```
Puedo añadir propiedades adicionales no contempladas en los parámetros manualmente:
```jsx
kawa.tipo = "Chopper"; //aquí cambiamos el tipo predefinido
kawa.accesorios = "Bahul trasero"; //añadimos una propiedad que no tenía la clase

console.log(kawa);
/*  
marca: 'Suzuky',
  modelo: 'Kawasaki',
  'año': 2019,
  tipo: 'Chopper',
  propietario: 'Ángel Puto Amo',
  ruedas: undefined,
  accesorios: 'Baúl trasero' }
*/
```


## 3.3. HERENCIA 
* Crear una clase nueva a partir de una existente --> SUBCLASES
* usamos "class + nuevaClase + extends + ClaseHeredada" para heredar la clase y super para invocar al constructor

```jsx
class Scooter extends Moto {
    constructor(marca, modelo, propietario) { //en constructor hay que seguir poniendo los parámetros que no estén predefinidos
        super(marca, modelo, propietario, 2); //en super hay que poner los parámetros de la clase moto, si alguno queremos que tenga valor predefinido es el momento de ponerlo
        this.accesorios = "bahúl"; //Aquí podemos añadir propiedades que no estén incluidas en la clase moto
        this.guantera = true;
        this.tipo = "Scooter";
    }
}

var miller = new Scooter("Kymco", "Miller", "Ángel el Dios Supremo del JavaScript");
var motoIndefinida = new Scooter; //esto nos sirve para logearlo y ver los parametros que tiene predefinidos


console.log(Scooter);//[Function: Scooter]
console.log(miller);
/*
Scooter {
  marca: 'Kymco',
  modelo: 'Miller',
  'año': 2019,
  tipo: 'Scooter',
  propietario: 'Ángel el Dios Supremo del JavaScript',
  ruedas: 2,
  accesorios: 'bahúl',
  guantera: true }

*/
console.log(motoIndefinida);
/*
Scooter {
  marca: undefined,
  modelo: undefined,
  'año': 2019,
  tipo: 'Scooter',
  propietario: undefined,
  ruedas: 2,
  accesorios: 'bahúl',
  guantera: true }
*/
miller.ronear(); // comprobamos que las clases heredadas como Scooter también heredan las funciones
Moto.ronronear("Peugeot","Speedfight", "Angelus"); //ronronear al ser un método estático solo se puede invocar desde la clase moto donde está definido
Moto.ronronear("Kymco", "miller", "su señoría Ángel Garrido", 2); //aunque ponga variables, la función estática no las coge
// miller.ronronear(); --> si ejecutamos ete comando em dará error, ya que ronronear no es una función de miller
```
#### Ejemplos de repaso:

```jsx

class Perro {
    constructor(raza, color, ojos, name) {
        this.raza = raza;
        this.color = color;
        this.ojos = ojos;
        this.propietario = "Ángel";
        this.name = name;
    }
    descripcion(){console.log(`${this.name} es un ${this.raza} de ojos ${this.ojos}, color ${this.color} que pertenece a ${this.propietario}`)};
}

let YorkSire = new Perro("York Sire terrier", "white", "blue", "Malocotón");//nuevo objeto de clase perro
YorkSire.propietario="Nuevo Propietario";//así cambio propiedades predefinidas
YorkSire.descripcion();//Malocotón es una York Sire terrier de ojos blue, color white que pertenece a Nuevo Propietario

//Ejemplo Herencia
class Gato extends Perro {
    constructor(castrado, color, name) {
        super("callejero", color, name);//parámetros de la clase de la que hereda
        this.castrado = false;
        this.ojos = "negros";
        this.name = name;
    }
    controlCastrado() {
        if(this.castrado === true) {
            console.log(`${this.name} está castrado`)
        } else {
            console.log(`WARNING!, hay que castrar a ${this.name}`)
        }
    }
}
let Mizifu = new Gato(true, "blanco","Mizifu");
Mizifu.descripcion();
Mizifu.controlCastrado();
```