'use strict'

var pais = "España";
var continente = "Europa";
var antiguedad = 2020;
var pais_y_continente = `${pais} ${continente}`;

console.log(pais, continente, antiguedad);
console.log(pais_y_continente);

console.log(antiguedad);

//Las variables se pueden cambiar pero las constantes no
antiguedad = 2030;
console.log(antiguedad);

pais = "México";
continente = "Centroamérica";
var continente_y_pais = continente + " " + pais;


console.log(continente_y_pais); //aquí me saldrá Centroamérica México
console.log(pais_y_continente); //aquí España Europa porque pais_y_continente se ha declarado antes de que renombre las variables "pais" y "continente"

//si doy valor a una variable sin haberla declarado, será valido si no estoy usando modo estricto, si uso modo estricto me dará error
//pais2="Chiquitistán"

