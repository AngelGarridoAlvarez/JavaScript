//Hacer un programa que muestre todos los números que hay entre dos números introducidos por el usuario en la pantalla del navegador

let num1 = parseInt(prompt(`Introduce el número dónde quieres empezar a contar` , `0`));
let num2 = parseInt(prompt(`introduce el número dónde quieres que pare de contar` , `0`));

while (num1>num2) {
    alert(`${num1} es mayor que ${num2}, el número donde empieza a contar tiene que ser menor que el número donde finaliza la cuenta`);
    num1 = parseInt(prompt(`Introduce el número dónde quieres empezar a contar` , `0`));
    num2 = parseInt(prompt(`introduce el número dónde quieres que pare de contar` , `0`));
}

//De esta forma me mete todos los números dentro de un paréntesis
/*
document.write(`Los números comprendidos entre ${num1} y ${num2} son: (`);

for (let i = num1+1; i < num2-1; i++){
    console.log(i)
    alert(i)
    document.write(`${i}, `);
}

document.write(`${num2 - 1}).`);
 */


document.write(`<h2>Los números comprendidos entre ${num1} y ${num2} son:</h2>`);

for (let i = num1+1; i < num2; i++){
    console.log(i)
    document.write(i + "</br>");
}