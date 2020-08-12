# Ventanas emergentes

## ALERTA
```jsx
alert("Esto es un alert introducido en código JavaScript");
```
## CONFIRMACIÓN
Se ejecutan con confirm, en este caso metemos el resultado dentro de una variable para poder ver la respuesta elegida y la mostramos por pantalla con document.write

```jsx
var myResul = confirm("esto es un confirm introducido en código JavaScript");
document.write(`has elegido ${myResul} y lo estamos mostrando con document.write()`)
```
## INGRESO DATOS
```jsx
var nombre = prompt("¿Cúal es tu nombre", "Ángel");

document.write(`<p> Gracias por responder ${nombre}</p>`);
```
## Plantillas

Las **platillas de texto**: no es más que usar las comillas invertidas + ${}

```jsx
var nombre = prompt("Introduce tu nombre");
var apellidos = prompt("Introduce tus apellidos");

var texto = `<h1>Hola qué tal</h1> <br> Mi nombre es: ${nombre} y  me apellido ${apellidos}`;

document.write(texto);
```
