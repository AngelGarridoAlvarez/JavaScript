//JSON

//Un JSON es la representación de texto de un objeto JavaScript serializado. Es muy común que se use para comunicación entre sistemas, por ejemplo mediante una API. Veamos un ejemplo. El siguiente objeto JavaScript:

var objetoJavascript = {
	propiedad1: "Hola soy un string",
	propiedad2: 1999,
	propiedad3: ["esto","es","un array"] ,
	propiedad4: true,
	propiedad5: null,
	propiedad6: objeto = {
		propiedadObjeto: "JSON puede contener objetos pero no debe contener funciones"}
}

//Puedo recorrer los json como si fueran un array con for in:
for (let index in objetoJavascript) {
	console.log("Esta es la " + index + " " + objetoJavascript[index])
};
/*
Esta es la propiedad1 Hola soy un string
Esta es la propiedad2 1999
Esta es la propiedad3 esto,es,un array
Esta es la propiedad4 true
Esta es la propiedad5 null
Esta es la propiedad6 [object Object]
 */

//JSON.stringify: Dado un objeto JavaScript lo convierte a JSON (en un string):

var representacionEnJson = JSON.stringify(objetoJavascript);

console.log(representacionEnJson);//{"propiedad1":"Hola soy un string","propiedad2":1999,"propiedad3":["esto","es","un array"],"propiedad4":true,"propiedad5":null,"propiedad6":{"propiedadObjeto":"JSON puede contener objetos pero no debe contener funciones"}}

//JSON.parse: Operación inversa a la anterior. Dado un string que contenga un JSON válido, devuelve el objeto JavaScript correspondiente:

var nuevoObjetoJS = JSON.parse(representacionEnJson);

console.log(nuevoObjetoJS);

/*
{ propiedad1: 'Hola soy un string',
  propiedad2: 1999,
  propiedad3: [ 'esto', 'es', 'un array' ],
  propiedad4: true,
  propiedad5: null,
  propiedad6:
   { propiedadObjeto:
      'JSON puede contener objetos pero no debe contener funciones' } }

*/