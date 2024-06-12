let scelta = "pari";

//funzione che genera un numero random 
    //Funzione
    function RandomNumberGenerator(min, max) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber; 
    }

//Invocazione
let userNumber = RandomNumberGenerator(0,5);
let pcNumber =  RandomNumberGenerator(0,5);
console.log(userNumber, pcNumber);