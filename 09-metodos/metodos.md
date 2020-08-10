# Metodos:

Propiedades y funciones que tiene JavaScript por defecto y que tienen diversas utilidades:


## Transformación de textos

Definimos las siguientes variables para ejemplificar los métodos:

```jsx 
var num = 9;
var texto1 = "Hello World, voy a ser el puto amo del JavaScript";
var texto2 = "I love JavaScript";
var dato = "";
var array = ["melocotón", "manzana", "pera", "piña0", "manzana"];
```
**Pasar una variable a string**

```jsx 
dato = num.toString();
console.log(dato);//9
```

**Comprobar el tipo de dato**

```jsx 
dato = typeof dato;
console.log(dato);//string
```

**Pasar a mayúsculas**

```jsx 
dato = texto1.toUpperCase()
console.log(dato);//HELLO WORLD, VOY A SER EL PUTO AMO DEL JAVASCRIPT
```

```jsx 
//Pasar a minúsculas
dato = dato.toLowerCase();
console.log(dato);
```


**Calcular longitud, contar carácteres**
```jsx 
dato = texto1.length
console.log(dato);
```
también mide el número de elementos de un array:
```jsx 
dato = array.length;
console.log(dato);
```

**Unir texto**
```jsx 
dato = texto1.concat(texto2 + " " + num); //útil para usar con bucles
console.log(dato);
```

## Métodos para hacer búsquedas dentro de un string:

**indexOf**
 * nos dice el carácter donde empieza la palabra
 * si ponemos una palabra que no está escrita nos devuelve -1

```jsx 
dato = texto1.indexOf("puto");
console.log(dato); //26
``` 

**search** es prácticamente lo mismo indexOf:
```jsx 
dato = texto1.search("puto");
console.log(dato); //26
``` 

**match** devuelve un array con una colección de los resultados que encuentre:

```jsx 
var textos = texto1.concat(" " + texto2)

dato = textos.match("JavaScript"); //así no me hace búsqueda global, solo me devuelve la primera palabra
console.log(dato);
/*[ 'JavaScript',
    index: 39,
    input: 'Hello World, voy a ser el puto amo del JavaScript I love JavaScript',
    groups: undefined ]
*/
```
De esta forma sí me hace la búsqueda global:
```jsx 
dato = textos.match(/JavaScript/g);
console.log(dato); //[ 'JavaScript', 'JavaScript' ]
```
Puedes ampliar imformación respecto a match en el siguiente [enlance](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/match)

<u>**subtr**</u> (dónde empieza el carácter, longitud de que quiero sacar).

```jsx
dato = texto1.substr(26,8);
console.log(dato); //puto amo
```

**chartAt**(nº de letra que quiero sacar)
```jsx
 dato = chart
```
**startsWith** buscar un texto específico al inicio del string:(true or false)
```jsx
texto1 = "Hello World, voy a ser el puto amo del JavaScript";
dato = texto1.startsWith("Hell");
console.log(dato); //true
//Es case sensitive
dato = texto1.startsWith("hell");
console.log(dato); //false
```
**includes** te busca en cualquier parte del string (también es case sensitive)
```jsx
 dato = texto1.includes("JavaScript");
 console.log(dato);//true
```

Puedes encontrar más métodos asociados a string en el [siguiente enlace](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String).



