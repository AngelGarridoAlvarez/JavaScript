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

```jsx

```

```jsx

```
```jsx

```

```jsx

```

```jsx

```
