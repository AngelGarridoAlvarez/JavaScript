//# 1. JSON y CLASES

let bicicleta = {
    color: 'rojo',
    modelo: 'BMX',
    frenos: 'De disco',
    velocidadMaxima: '60 km/h',
    cambiaColor: function (nuevo_color){
        this.color = nuevo_color;
        console.log(this);
    }

};

console.log(bicicleta);
bicicleta.cambiaColor('Amarillo');

/*
{
  color: 'rojo',
  modelo: 'BMX',
  frenos: 'De disco',
  velocidadMaxima: '60 km/h',
  cambiaColor: [Function: cambiaColor]
}
{
  color: 'Amarillo',
  modelo: 'BMX',
  frenos: 'De disco',
  velocidadMaxima: '60 km/h',
  cambiaColor: [Function: cambiaColor]
}

 */
