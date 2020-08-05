//Arrays: recorrido con for

let listaCompra = ["Leche desnatada","Leche entera", "Plátanos", "Pan", "Yogures", "Lechuga", "Tomate", "Embutido", "Atún", "Pescado", "Pimientos", "Calabacín", "Cebolla"]

for(i = 0; i < listaCompra.length; i++) {
  console.log(`${i+1}. ${listaCompra[i]}`);
}

//Añadir elementos
listaCompra.push("Hummus"); //añadimos Hummus al final de la lista
listaCompra.unshift("Cocacola light"); //añade al princio de la lista

console.log(listaCompra);

//Eliminar elementos

var cars = ["Rover 425hdi", "Toyota Auris Touring Sport Hybrid", "Citröen C4 coupe"];
cars.pop();//quita el último
cars.shift();//quita el primero
console.log(cars);

///////////////////////////.map()/////////////////////////

//.map() nos evita el uso de bucles y nos devuelve un array nuevo

var cars2 = [
  {brand: "Rover", name: "420 hdi", owner: "Mamá"},
  {brand: "Audi", name: "A4 gasolina atmosférico", owner: "Mamá"},
  {brand: "citröen", name: "BX", owner: "Mamá"},
  {brand: "citröen", name: "Xantia", owner: "Papá"},
  {brand: "Land Rover", name: "Discovery", owner: "Papá"},
  {brand: "Mercedes", name: "serie 5", owner: "Papá"},
]

//conseguir las marcas con forEach():

var cars2Brands =[];
cars2.forEach(function (cars2) {
  cars2Brands.push(cars2.brand)
});

console.log(cars2Brands);

//conseguir el owner con .map()

const cars2Owners = cars2.map(propietario => propietario.owner);

console.log(cars2Owners);

//creando un array de objetos con .map()
cars2ownerBrand = cars2.map(carOwner =>  ({car: carOwner.name, owner: carOwner.owner}));

console.log(cars2ownerBrand);

////////////////////.reduce()//////////////////////////////

// usar .reduce () es una manera fácil de generar un único valor u objeto a partir de una matriz. 

var pilots = [ 
  { id: 10, name: "Poe Dameron", years: 14, }, 
  { id: 2, name: "Temmin 'Snap' Wexley", years: 30, }, 
  { id: 41, name: "Tallissan Lintra", years: 16, }, 
  { id: 99, name: "Ello Asty", years: 22, }
  ];

//Sacamos el total de años de experiencia con .reduce():

  var totalYears = pilots.reduce(function (pepinator, fluflu) { 
    return pepinator + fluflu.years;}, 0);

    console.log(totalYears);

    var totalName = pilots.reduce(function (fluxflux, trastras) { 
      return fluxflux + trastras.name},0);
  
      console.log(totalName);