//# Clases
// * Es un "molde" con el que crear objetos similares
// Las clases se componen de Propiedades y Métodos
//Usamos "tsc -w .\camiseta.ts" para compilar de .ts a .js
var Camiseta = /** @class */ (function () {
    function Camiseta() {
        //Propiedades:
        this.color = "blanco"; //valor por defecto
        this.precio = 39.95;
    }
    //Métodos
    Camiseta.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    Camiseta.prototype.getPrecio = function () {
        return this.precio + "€";
    };
    return Camiseta;
}());
var camiseta = new Camiseta();
camiseta.color = "blue";
camiseta.modelo = "cuello alto";
/*
camiseta.nuevaPropiedad = "estilo cutre"
Al usar typeScript no me deja añadir propiedades que no estén predefinidas en la clase, así que el compilador me da error:


camiseta.ts:17:10 - error TS2339: Property 'nuevaPropiedad' does not exist on type 'Camiseta'.

17 camiseta.nuevaPropiedad = "estilo cutre"

camiseta.precio = 29.99;
Al ser el precio una propiedad privada, me va a dar error al intentar cambiarlo.
camiseta.ts:23:10 - error TS2341: Property 'precio' is private and only accessible within class 'Camiseta'.

23 camiseta.precio = 29.99;
*/
console.log(camiseta); //Camiseta { color: 'blue', modelo: 'cuello alto' }
var adidas = new Camiseta();
adidas.modelo = "retro";
adidas.talla = "XXL";
adidas.marca = "adidas";
console.log(adidas);
/*
Camiseta {
  color: 'blanco',
  modelo: 'retro',
  talla: 'XXL',
  marca: 'adidas'
 */
//He creado el método setPrecio que sí me permite cambiar el precio de la propiedad privada precio
adidas.setPrecio(99.99);
console.log(adidas);
/*
Camiseta {
  color: 'blanco',
  precio: 99.99,
  modelo: 'retro',
  talla: 'XXL',
  marca: 'adidas'
}
 */
console.log(adidas.getPrecio()); // 99.99€
//## Constructor
// * es un método que sirve para dar valor inicial a las propiedades
var Camiseta2 = /** @class */ (function () {
    //Métodos
    function Camiseta2(color, modelo, marca) {
        //Propiedades:
        this.color = "blanco"; //valor por defecto
        this.precio = 39.95;
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
    }
    Camiseta2.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    Camiseta2.prototype.getPrecio = function () {
        return this.precio + "€";
    };
    return Camiseta2;
}());
var nike = new Camiseta2('pure white', 'sin mangas', 'nikelodigas');
console.log(nike);
/*
Camiseta2 {
color: 'pure white',
precio: 39.95,
modelo: 'sin mangas',
marca: 'nikelodigas'
}
 */ 
