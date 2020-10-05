//# POO
// # 1. Clases
// * Es un "molde" con el que crear objetos similares
// Las clases se componen de Propiedades y Métodos
//Usamos "tsc -w .\1-camiseta.ts" para compilar de .ts a .js
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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



17 camiseta.nuevaPropiedad = "estilo cutre"

camiseta.precio = 29.99;
Al ser el precio una propiedad privada, me va a dar error al intentar cambiarlo.
1-camiseta.ts:23:10 - error TS2341: Property 'precio' is private and only accessible within class 'Camiseta'.

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
//## 2. Constructor
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
var Camiseta3 = /** @class */ (function () {
    //Métodos
    function Camiseta3(color, modelo, marca) {
        //Propiedades:
        this.color = "blanco"; //valor por defecto
        this.precio = 39.95;
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
    }
    Camiseta3.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta3.prototype.getColor = function () {
        return "El color de la camiseta " + this.marca + " " + this.modelo + " es " + this.color + ".";
    };
    return Camiseta3;
}());
var rebook = new Camiseta3('Rojo', 'Todo Guapa', 'Rebook');
console.log(rebook);
rebook.setColor('Yellow');
console.log(rebook.getColor()); //El color de la camiseta Rebook Todo Guapa es Yellow.
//Si la clase no cumple el contrato de la interface, el compilador me va a dar error:
/*
class CamisetaRompeInterface implements CamisetaBase {
    //Propiedades:
    public color: string = "blanco"; //valor por defecto
    public modelo: string;
    public marca: string;
    public talla: string;
    private precio: number = 10.95;

    //Métodos

    constructor(color, modelo, marca){
        this.color = color;
        this.modelo = modelo;
        this. marca = marca;
    }

}

let RompeInterface new CamisetaRompeInterface('Verde','Rompedor','Interface');


  Type 'CamisetaRompeInterface' is missing the following properties from type 'CamisetaBase': setColor, getColor

167 class CamisetaRompeInterface implements CamisetaBase {
          ~~~~~~~~~~~~~~~~~~~~~~

[10:39:01] Found 1 error. Watching for file changes.

 */
// ## 4. Herencia
/*
* Una clase hija hereda todas las características de la clase padre (métodos y propiedades)
 */
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.capucha = false;
        return _this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        if (this.capucha == true) {
            return "La sudadera " + this.marca + " " + this.modelo + " de color " + this.color + " tiene capucha";
        }
        else {
            return "La sudadera " + this.marca + " " + this.modelo + " de color " + this.color + " NO tiene capucha";
        }
    };
    return Sudadera;
}(Camiseta2));
var joma = new Sudadera('verde', 'Fucker', 'Joma');
console.log(joma.getCapucha()); //La sudadera Joma Fucker de color verde NO tiene capucha
joma.setCapucha(true);
console.log(joma.getCapucha()); //La sudadera Joma Fucker de color verde tiene capucha
// ## 5. TS - Decoradores
/*
* Un decorador es un patrón de diseño que nos permite hacer una copia de una clase y modificarla en función de los parámetros que le pasemos.
 */
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("camiseta estampada con el logo de " + logo + ".");
        };
    };
}
;
var SudaderaLogo = /** @class */ (function (_super) {
    __extends(SudaderaLogo, _super);
    function SudaderaLogo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SudaderaLogo = __decorate([
        estampar('Nintendo') //(no se pone ; y se aplica el decorador a la clase siguiente)
    ], SudaderaLogo);
    return SudaderaLogo;
}(Sudadera));
;
var sudaderaNintendo = new SudaderaLogo('Red', 'Mario', 'Adidas');
console.log(sudaderaNintendo);
sudaderaNintendo.estampacion(); //camiseta estampada con el logo de Nintendo.
