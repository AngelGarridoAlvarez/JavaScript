var fantasticFour = {
    nombre: "Reed Richards",
    miName: function (num) {
        console.log(this.nombre + ' #' + num);
    }
};

//////////////////////////////////////////

var miFantastic = fantasticFour.miName;
fantasticFour.miName(1);
miFantastic(2);


////////////////////////////

miFantastic.call(fantasticFour, 3);
miFantastic.apply(fantasticFour,[4]);

///////////////////////////////

const mixedFun1 = miFantastic(fantasticFour);
mixedFun1(5);

///////sobreescribir

const mixedFun2 = miFantastic.bind({nombre: "Pepa Pig"});
mixedFun2(6);

/////////////////////////////// function curring (valor por defecto)

function sum(a, b) {
    return a + b;
}

const sum2 = sum.bind(this, 2);
console.log( sum2(7, 3) );


