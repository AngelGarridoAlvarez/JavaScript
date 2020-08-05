//Programa que pida dos números y que nos diga cuál es el mayor, el menor y si son iguales y que no permita meter números incorrectos


//Utilizo prompt para pedir el número y parseInt para tiparlo como número ya que lo que se introduce en el navegador siempre es un string

var num1 = parseFloat(prompt(`Introduce un número 1`, 0));
var num2 = parseFloat(prompt(`Introduce otro número`, 0));


while (isNaN(num1) || isNaN(num2)){
    alert("Uno de los datos introducidos no es número, vuelve a introducir los datos y asegurate de que sean números");
    var num1 = parseFloat(prompt(`Introduce un número`, 0));
    var num2 = parseFloat(prompt(`Introduce otro número`, 0));
}

if (num1 == num2) {
    alert (`El primer número que has elegido (${num1}) es el mismo número que elegiste después`);
    document.write(`El primer número que has elegido (${num1}) es el mismo número que elegiste después`)

} else if (num1 > num2) {
    alert (`El primer número que has elegido (${num1}) es el mayor que el segundo número que has elegido (${num2})`);
document.write(`El primer número que has elegido (${num1}) es el mayor que el segundo número que has elegido (${num2})`);
}
else{
    alert (`El primer número que has elegido (${num1}) es el menor que el segundo número que has elegido (${num2})`);

    document.write(`El primer número que has elegido (${num1}) es el menor que el segundo número que has elegido (${num2})`)
}


