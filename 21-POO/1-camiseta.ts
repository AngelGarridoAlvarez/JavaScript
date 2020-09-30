//# POO
// # 1. Clases
// * Es un "molde" con el que crear objetos similares
// Las clases se componen de Propiedades y Métodos
//Usamos "tsc -w .\1-camiseta.ts" para compilar de .ts a .js


class Camiseta{

    //Propiedades:
    public color: string = "blanco"; //valor por defecto
    public modelo: string;
    public marca: string;
    public talla: string;
    private precio: number = 39.95;

    //Métodos
    public setPrecio(precio){
        this.precio = precio;
    }

    public  getPrecio(){
        return this.precio + "€"
    }


}

var camiseta = new Camiseta();

camiseta.color = "blue";
camiseta.modelo = "cuello alto"
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

let adidas = new Camiseta();
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

class Camiseta2{

    //Propiedades:
    public color: string = "blanco"; //valor por defecto
    public modelo: string;
    public marca: string;
    public talla: string;
    private precio: number = 39.95;

    //Métodos

    constructor(color, modelo, marca){
        this.color = color;
        this.modelo = modelo;
        this. marca = marca;
    }

    public setPrecio(precio){
        this.precio = precio;
    }

    public  getPrecio(){
        return this.precio + "€"
    }

}

let nike = new Camiseta2('pure white', 'sin mangas', 'nikelodigas');
console.log(nike);
/*
Camiseta2 {
color: 'pure white',
precio: 39.95,
modelo: 'sin mangas',
marca: 'nikelodigas'
}
 */