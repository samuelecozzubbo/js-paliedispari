//parola palindroma

//let parola = prompt("Inserisci una parola");
let parolaInversa="";

//Funzione inverti parola
function invertiParola(parola) {
    for(let i = parola.length - 1; i >= 0; i--){
        parolaInversa += parola[i];
    }
    return parolaInversa;
}

//Funzione confronto parole palindrome
function palindromeCheck(parolaInversa){
    if(parolaInversa === parola){
        return "parola palindroma";
    } else {
        return "parola non palindroma";
    }
}
//stampa risultato funzione inverti parola
parolaInversa = invertiParola(parola);
console.log("La parola invertita è:",parolaInversa);
//Stampa risultato funzione check palindroma
let palindroma = palindromeCheck(parolaInversa);
console.log(palindroma);

