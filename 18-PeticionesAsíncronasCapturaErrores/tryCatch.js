'use strict'

//El código susceptible de dar fallos lo meto dentro del try
try{
    let year = 2019
    alert(yea);// Error: alert is not defined
}catch (error){
    console.log('ha ocurrido un error en el código');
}
let mensaje = "mi código se sigue ejecutando cuando se captura el error"
console.log(mensaje)
// ha ocurrido un error en el código
// mi código se sigue ejecutando cuando se captura el error


/*
Si no hubiera capturado el error me daría el siguiente mensaje y no se seguiría ejecutando código
ReferenceError: alert is not defined
    at Object.<anonymous> (/home/angel/github/javaScript/18-PeticionesAsíncronasCapturaErrores/tryCatch.js:2:1)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)
 */