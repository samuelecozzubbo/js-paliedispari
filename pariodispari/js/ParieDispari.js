
//funzione che genera un numero random 
//Funzione
function RandomNumberGenerator(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber; 
}

function sum (num1, num2){
    let sumResult = num1 + num2;
    return sumResult;
}

//scelta utente
let scelta;
let userNumber = 3;

//Invocazione funzione randomGenerator
let pcNumber =  RandomNumberGenerator(0,5);
console.log(userNumber, pcNumber);
//Invocazione somma
let sumNumber = sum(userNumber, pcNumber);
console.log(sumNumber);