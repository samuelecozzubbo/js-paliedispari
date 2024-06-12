
//Funzione che genera un numero random 
function RandomNumberGenerator(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber; 
}

//Funzione somma
function sum (num1, num2){
    let sumResult = num1 + num2;
    return sumResult;
}

//Funzione odd or even
    function oddOrEven(numToCheck) {
        if(numToCheck % 2 === 0) {
            return "pari";
        }else {
            return "dispari";
        }
    }

//Scelta utente
let scelta;
let userNumber = 3;

//Invocazione funzione randomGenerator
let pcNumber =  RandomNumberGenerator(0,5);
console.log(userNumber, pcNumber);
//Invocazione somma
let sumNumber = sum(userNumber, pcNumber);
console.log(sumNumber);
//Invocazione oddOrEven
let check = oddOrEven(sumNumber);
console.log(check);