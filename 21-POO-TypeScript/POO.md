# Programación Orientada a Objetos

## 1. Clases
* Es un "molde" con el que crear objetos similares
* Las clases se componen de Propiedades y Métodos
* Usamos "tsc -w .\1-camiseta.ts" para compilar de .ts a .js
 
```jsx
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

```
Generar un objeto a partir de Camiseta:
```jsx

var camiseta = new Camiseta();
```

Cambiar propiedades de un objeto
```jsx
camiseta.color = "blue";
camiseta.modelo = "cuello alto";

console.log(camiseta); //Camiseta { color: 'blue', modelo: 'cuello alto' }
```

Al usar typeScript no me deja añadir propiedades que no estén predefinidas en la clase, así que el compilador me da error:
```jsx
camiseta.nuevaPropiedad = "estilo cutre"
/*
1-camiseta.ts:17:10 - error TS2339: Property 'nuevaPropiedad' does not exist on type 'Camiseta'.
*/
```

Precio es una propiedad privada, por lo que si intentamos cambiarla por este método nos dará error

```jsx
camiseta.precio = 29.99;
/* Al ser el precio una propiedad privada, me va a dar error al intentar cambiarlo.
1-camiseta.ts:23:10 - error TS2341: Property 'precio' is private and only accessible within class 'Camiseta'.
23 camiseta.precio = 29.99;*/
```
Otro ejemplo:
```jsx
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
```

He creado el método setPrecio que sí me permite cambiar el precio de la propiedad privada precio

```jsx
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
```
## 2. Constructor
* es un método que sirve para dar valor inicial a las propiedades
```jsx
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
```

## 3. Interfaces
* Es un contrato en el que definimos que propiedades y que métodos obligatorios va a tener una clase.
* Se utiliza cuando necesita un software robusto con rigurisidad a la hora de definir una clase.

```jsx
interface CamisetaBase{
    setColor(color);
    getColor();
}

class Camiseta3 implements CamisetaBase {
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

    public setColor(color){
        this.color = color;
    }

    public  getColor(){
        return `El color de la camiseta ${this.marca} ${this.modelo} es ${this.color}.`
    }
}

let rebook = new Camiseta3('Rojo', 'Todo Guapa', 'Rebook',);

console.log(rebook);
rebook.setColor('Yellow');
console.log(rebook.getColor());//El color de la camiseta Rebook Todo Guapa es Yellow.
```

Si la clase no cumple el contrato de la interface, el compilador me va a dar error

```jsx

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

/*
  Type 'CamisetaRompeInterface' is missing the following properties from type 'CamisetaBase': setColor, getColor

167 class CamisetaRompeInterface implements CamisetaBase {
          ~~~~~~~~~~~~~~~~~~~~~~

[10:39:01] Found 1 error. Watching for file changes.

 */
```
 ## 4. Herencia

* Una clase hija hereda todas las características de la clase padre (métodos y propiedades).

```jsx


class Sudadera extends Camiseta2{
    public capucha: boolean = false;

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }

    getCapucha(){
        if (this.capucha == true){
            return `La sudadera ${this.marca} ${this.modelo} de color ${this.color} tiene capucha`;
        } else {
            return `La sudadera ${this.marca} ${this.modelo} de color ${this.color} NO tiene capucha`;
        }
    }
}

let joma = new Sudadera('verde','Fucker', 'Joma');
console.log(joma.getCapucha());//La sudadera Joma Fucker de color verde NO tiene capucha
joma.setCapucha(true);
console.log(joma.getCapucha());//La sudadera Joma Fucker de color verde tiene capucha
```
## 5. Decoradores

* Un decorador es un patrón de diseño que nos permite hacer una copia de una clase y modificarla en función de los parámetros que le pasemos.

```jsx
function estampar(logo:string){
    return function(target: Function){
        target.prototype.estampacion = function ():void{//void significa que no tiene ninguna respuesta
            console.log(`camiseta estampada con el logo de ${logo}.`)
        }
    }
};

@estampar('Nintendo')//(no se pone ; y se aplica el decorador a la clase siguiente)
class SudaderaLogo extends Sudadera{
};

let sudaderaNintendo = new SudaderaLogo('Red','Mario','Adidas');
console.log(sudaderaNintendo);
sudaderaNintendo.estampacion();//camiseta estampada con el logo de Nintendo.
```