'use strict'

//El operador this hace referencia al objeto en el que se encuentra en ese momento:

let objetoMechero = {
    marca: "bic",
    precio: 1 + "€",
    color: "rosa",
    descripcion(){console.log(`tengo un mechero ${this.marca} de color ${this.color} que cuesta ${this.precio}`)}
}

objetoMechero.descripcion()//tengo un mechero bic de color rosa que cuesta 1€
//Si no pusieramos this daría error