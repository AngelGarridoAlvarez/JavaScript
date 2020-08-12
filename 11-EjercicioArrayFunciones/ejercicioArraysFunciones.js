/*
Requisitos del ejercicio Arrays:

1. Pedir 6 números por pantalla y que los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola
3. Ordenar el array y mostrarlo
4. Invertir el orden del array y mostrarlo
5. Mostrar cuántos elementos tiene el array
6. Búsqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
 */


//let nums = new Array(5);
let nums = []
console.log(nums);
//console.log(nums.length);

//1. Pedir 6 números por pantalla y que los meta en un array
//2. Mostrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola

document.write("<strong>1. Pedir 6 números por pantalla y que los meta en un array</strong></br>")
document.write("<strong>2. Mostrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola</strong></br>")

for (let i = 0; i <= 5; i++) {
    //nums[i] = parseInt(prompt(`Introduce el elemento del array ${i}`));
    let num = parseInt(prompt(`Introduce el elemento del array ${i}`));
    while (isNaN(num)) {
        alert("El valor introducido no es valido, tienes que introducir valores con caracteres numéricos");
        num = parseInt(prompt(`Introduce el elemento del array ${i}`));
    }
    nums.push(num);
}

document.write(`nums = [${nums}] </br>`);

document.write()

//Si quiero mostrar los elementos del array en diferentes lineas del DOM lo puedo hacer con for each:

//document.write(nums.forEach(num => document.write(`${num}</br>`))); //en esta opción me sale un elemento como sale undefined por usar document.write. Document write es una mala práctica, aquí se utiliza por ser lo que manda el ejercicio pero es mejor usar body.innerHTML

document.write("nums = [</br>")

for (let num in nums){
    document.write("   " + nums[num] + ",</br>")
}
document.write("]</br>")

console.log(nums);

//3. Ordenar el array y mostrarlo
document.write("<strong>3. Ordenar el array y mostrarlo</strong></br>")

let orderedNums = nums.sort()
document.write(`orderedNums = [${orderedNums}] <br/>`);
console.log(orderedNums);

//4. Invertir el orden del array y mostrarlo
document.write("<strong>4. Invertir el orden del array y mostrarlo</strong></br>")

let reversedNums = orderedNums.reverse();
document.write(`reversedNums = [${reversedNums}] <br/>`);
console.log(reversedNums);

//5. Mostrar cuántos elementos tiene el array
document.write("<strong> 5. Mostrar cuántos elementos tiene el array</strong></br>")

document.write(`El array nums tiene ${nums.length} elementos<br/>`);
console.log(nums.length);

//6. Búsqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
document.write("<strong> 6. Búsqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice</strong></br>")

let numUsuario = parseInt(prompt("Introduce el número que quieres buscar dentro del array"));
if (nums.indexOf(numUsuario) == -1) {
    document.write(`El número ${numUsuario} no se encuentra en el array nums</br>`);
} else {
    document.write(`El número ${numUsuario} se encuentra en la posición ${nums.indexOf(numUsuario)} del array nums</br>`)
}
;