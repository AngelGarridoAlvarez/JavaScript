
/*
var name = prompt("Favorite Marvel main character:");
var team = "";

switch (name) {
    case "Daredevil":
        team = "The Defenders";
        break;
    case "Spiderman":
        team = "Avengers";
        break;
    case "Black bolt":
        team = "Inhumans";
        break;
    case "Beast":
        team = "X-Men";
        break;
    default:
        team = "Team Marvel"
        break;
}

console.log("Your favorite character is from the team " + team);

*/

//

let level = 3;
let quests =[];

switch (level) {
    case 1:
        quests.push('El castillo');
    case 2:
        quests.push('El barco');
        break;
    case 3:
        quests.push('El castillo');
    default:
        quests.push('puta mierda')

}

console.log(quests);


//////////////////////////


sexo = "mujer";

let esperanzaDeVida2;
if (sexo == "hombre") {
    esperanzaDeVida2 = 70;
}

else {
    esperanzaDeVida2= 90
}

console.log(esperanzaDeVida2);


//////////////

const miArray = [1,3,5,7];

miArray.forEach((value, index)=> console.log(value));

miArray.forEach( function(val, ind){
    console.log(val,ind)

});


console.log('callback');
//CALL BACK --> PASAR UNA FUNCIÓN COMO PARAMETRO:

const echo = function(data) {
    console.log(data)
};

const miFun = function (callback) {
    callback('pepe');
    //echo(pepe)
};

miFun(echo);
miFun;
console.log(miFun);





