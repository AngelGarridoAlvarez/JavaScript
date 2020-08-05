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


console.log(coche.verMarcaFlecha());
console.log(coche.verMarcaFlecha2());