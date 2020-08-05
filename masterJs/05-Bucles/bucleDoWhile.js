//do while

var years = 30;

document.write(`el alert se ha ejecutado desde ${years}`);
do {
    console.log(`vamos por el ${years}`);
    alert(`vamos por el ${years}`);
    if(years == 28){
        break;
    }
    //sólo se va a ejecutar hasta que llegue a 28 por el break que hemos introducido
    years--;
} while (years >= 25);

document.write(` hasta ${years}`);

//ejecuta ese alert/console.log hasta que years sea mayor o igual que 25, finalmente hasta 28 porque hemos incorporado un break