//Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. Un valor de una propiedad puede ser una función, en cuyo caso la propiedad es conocida como un método. Además de los objetos que están predefinidos en el navegador, puedes definir tus propios objetos.

//CREAMOS UN OBJETO:
var marca = "mercedes";

var coche = {

    //PROPIEDADES: no hay que usar, var, let o const para declararlas
    marca: "reanult",
    año: 2020,
    modelo: "cactus",


    //MÉTODOS: no hay que usar function para declararlos
    verModelo: function () { //las funciones dentro de los objetos se denominan métodos
        return this.modelo;// si no ponemos this buscaría modelo fuera del objeto coche
    },
    verMarca: function () { //si no pusieramos this, me devolvería la marca mercedes en lugar de renault
        return this.marca;
    },

    //cuando hacemos this.marca es como si estuviéramos haciendo coche.marca

    verMarcaSinThis: () => marca,//me devuelve mercedes porque definí la var fuera del objeto coche, si no estuviera esa var definida me devolvería error
    verMarcaSinThisCorrectamente: () => coche.marca,//Me devuelve renault, pero si creo otro objeto a partir de coche voy a tener un problema

    verMarcaFlecha: () => this.marca, //al hacer la función flecha el this no funciona, como no encuentra marca me devolvería undefined
    verMarcaFlecha2: function () { //en cambio si metemos una función fecha dentro de otra función si coge el ámbito que le corresponde
        let f = () => this.marca;
        return f();
    },
    verMarcaError: function () {
        return marca;
        //aquí no hemos puesto this, por lo que me devolver mercedes en lugar de renault
    },
    verThis: function () {
        return this;
    },

    verThisFlecha1: () => {
        return this.marca;
    },

};


console.log(coche.verMarcaFlecha());//undefined
console.log(coche.verMarcaFlecha2());//renault
console.log(coche.verThis());//me devuelve el objeto coche completo
console.log(coche.verThisFlecha1());//undefined
console.log(coche.verMarcaSinThis());//Me devuelve mercedes en lugar de renault por no utilizar this
console.log(coche.verMarcaSinThisCorrectamente());//renault