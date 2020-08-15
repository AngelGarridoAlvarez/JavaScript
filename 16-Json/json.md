# JSON: Java Script Object Notation

Un JSON es la representación de texto de un objeto JavaScript serializado. Es muy común que se use para comunicación entre sistemas, por ejemplo mediante una API. Veamos un ejemplo. El siguiente objeto JavaScript:

```jsx
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
```

##¿Se puede incluir una función en un objeto JSON?
The official answer is: No, it is not valid to define functions in JSON results! The answer could be yes, because "code is data" and "data is code". Even if JSON is used as a language independent data serialization format, a tunneling of "code" through other types will work.

JSON is purely meant to be a data description language. As noted on http://www.json.org, it is a "lightweight data-interchange format." - not a programming language.

Per http://en.wikipedia.org/wiki/JSON, the "basic types" supported are:

* Number (integer, real, or floating point)
* String (double-quoted Unicode with backslash escaping)
* Boolean (true and false)
* Array (an ordered sequence of values, comma-separated and enclosed in square brackets)
* Object (collection of key:value pairs, comma-separated and enclosed in curly braces)
null

[fuente](https://stackoverflow.com/questions/2001449/is-it-valid-to-define-functions-in-json-results#:~:text=The%20official%20answer%20is%3A%20No,through%20other%20types%20will%20work.)