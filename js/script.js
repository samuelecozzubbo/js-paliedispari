//parola palindroma

let parola ="ciao";
let parolaInversa="";

//Creo una funzione inverti parola
function invertiParola(parola) {
    for(let i = parola.length - 1; i >= 0; i--){
        parolaInversa += parola[i];
        console.log(parolaInversa);
    }
    return parolaInversa;
}

parolaInversa = invertiParola(parola);
console.log("La parola invertita è:",parolaInversa);

