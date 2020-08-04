//SCOPE

var miVar = 5; //esto es una variable global al fichero

function miFun() {

    var miVar2 = 6; //esto es una variable local a la función
    console.log(miVar);

    /*
    for (let i=0; i<10; i++){

    }

    for (let i=0; i<10; i++){

    }

    function otraFun() {
        console.log(miVar2); //aquí si puedo acceder a miVar2 ya que están en el escope
        console.log(miVar); //también puedo acceder a miVar
    }

    return() => {
        return miVar2;
    }

    */
    console.log(this); //this representa en el contexto en el que está (en una clase, se refiere a la propia clase), pero en este caso no representa la función, representa un objeto de node que está en un entorno superior, en el navegador sería la ventana

}


/* console.log(miVar); //si pongo console.log(miVar2) me sale ReferenceError: miVar2 is not defined, desde aquí no puedo acceder a miVar2 porque está dentro de la función miFun */

miFun().call({})


