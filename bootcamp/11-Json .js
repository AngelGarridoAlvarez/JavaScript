//JSON

//Un JSON es la representación de texto de un objeto JavaScript serializado. Es muy común que se use para comunicación entre sistemas, por ejemplo mediante una API. Veamos un ejemplo. El siguiente objeto JavaScript:

var objetoJavascript = {
	propiedad1: "Valor de la propiedad 1",
	propiedad2: "Valor de la propiedad 2",
	propiedad3: ["esto","es","un array"] 
   }


//JSON.stringify: Dado un objeto JavaScript lo convierte a JSON (en un string):

var representacionEnJson = JSON.stringify(objetoJavascript);

console.log(representacionEnJson);// Devuelve {"propiedad1":"Valor de la propiedad 1","propiedad2":"Valor de la propiedad 2","propiedad3":["esto","es","un array"]}

//JSON.parse: Operación inversa a la anterior. Dado un string que contenga un JSON válido, devuelve el objeto JavaScript correspondiente:

var nuevoObjetoJS = JSON.parse(representacionEnJson);

console.log(nuevoObjetoJS);

/*
Devuelve:
{
  propiedad1: 'Valor de la propiedad 1',
  propiedad2: 'Valor de la propiedad 2',
  propiedad3: [ 'esto', 'es', 'un array' ]
}
*/