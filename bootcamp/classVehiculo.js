class Vehiculo {
    precio;
    antiguedad;
    propietario;

    constructor(precio, antiguedad, propietario) {
        this.precio = precio;
        this.antiguedad = antiguedad;
        this.propietario = propietario;
    }
}

class Terrestre extends Vehiculo {
    tiene_ruedas;

    constructor(precio, antiguedad, propietario, tiene_ruedas) {
        super(precio, antiguedad, propietario);
        this.tiene_ruedas = tiene_ruedas;
    }
}

class Coche extends Terrestre {
    numero_puertas;
    maletero_atras;

    constructor(precio, antiguedad, propietario, tiene_ruedas, numero_puertas, maletero_atras) {
        super(precio, antiguedad, propietario, tiene_ruedas);
        this.numero_puertas = numero_puertas;
        this.maletero_atras = maletero_atras;
    }
}

class Tanque extends Terrestre {
    ataque;

    constructor(precio, antiguedad, propietario, tiene_ruedas, ataque) {
        super(precio, antiguedad, propietario, tiene_ruedas);
        this.ataque = ataque;
    }
}

class Aereo extends Vehiculo {
    altura_maxima;

    constructor(precio, antiguedad, propietario, altura_maxima) {
        super(precio, antiguedad, propietario);
        this.altura_maxima = altura_maxima;
    }
}

class AlaDelta extends Aereo {
    individual;
    con_motor;

    constructor(precio, antiguedad, propietario, altura_maxima, individual, con_motor) {
        super(precio, antiguedad, propietario, altura_maxima);
        this.individual = individual;
        this.con_motor = con_motor;
    }
}

class Avion extends Aereo {
    comercial_o_mercancias;
    nombre_piloto;

    constructor(precio, antiguedad, propietario, altura_maxima, comercial_o_mercancias, nombre_piloto) {
        super(precio, antiguedad, propietario, altura_maxima);
        this.comercial_o_mercancias = comercial_o_mercancias;
        this.nombre_piloto = nombre_piloto;
    }
}

class Maritimo extends Vehiculo {
    

}

class Barco extends Maritimo {
    comercial_o_pasajeros;
}

class Submarino extends Maritimo {

}

let avion1 = new Avion(1000, 10, "Javier", 10000, "comercial", "Javier");
console.log(avion1);

console.log(-Math.random()*100+(Math.random()*100)/Math.random());