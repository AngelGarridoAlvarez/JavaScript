#Fechas Date() y Matemáticas Math()

##Algunos métodos de Date():
```jsx
let fecha = new Date ();
let year = fecha.getFullYear();
let month = fecha.getMonth() + 1;//getMonth requiere sumarle 1 ya que empieza a contar en 0



let textoHora = `
    El año es ${year}
    El mes es ${month}
    El día es ${fecha.getDate()}
    Son las ${fecha.getHours()}:${fecha.getMinutes()}
    `;

console.log(textoHora);
// El año es 2020
// El mes es 8
// El día es 19
// Son las 9:30
```
[Más acerca de Date()](https://www.w3schools.com/js/js_dates.asp)

##Algunos métodos de Math():

```jsx
//número aleatorio del 1 al 100
console.log(parseInt(Math.random() * 100));
//numero aletorio del 1 al 100 con dos decimales
console.log(parseFloat((Math.random() * 100).toFixed(2)));


let numeroConDecimales =2.29;
console.log(Math.ceil(numeroConDecimales));//3 redondea por encima
console.log(Math.floor(numeroConDecimales));//2 redondea por debajo
console.log(Math.round(numeroConDecimales));//2 redondea al más cercano

let numeroConDecimales2 =2.79;
console.log(Math.ceil(numeroConDecimales2));//3
console.log(Math.floor(numeroConDecimales2));//2
console.log(Math.round(numeroConDecimales2));//3
```


[Más acerca de Math()](https://www.w3schools.com/js/js_math.asp)

