// Visualizzare con degli alert 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//genero i miei 5 numeri e li inserisco all'interno di un array
let myArray = [];
let userNumber;
let corectNumbers = [];
let quantitaNumeri = [];

for ( let i = 0; i < 5; i++ ){
    let number = getRndInteger(1, 50);
    alert(number);
    myArray.push(number);
}
console.log('array casuale: ' + myArray);

//prendo dal dom il contenitore e il suo contenuto andandolo a mettere all'interno di let seconds
const containerSeconds = document.getElementById('containerSeconds'); 
let seconds = parseInt(containerSeconds.textContent);

//creo la funzione timer
const timer = setInterval(function(){
    seconds = seconds - 1;
    if  ( seconds === - 1 ){
        clearInterval(timer);
        // vado a ciclare 5 volte la richiesta " Inserisci numero "
        for( let j = 0; j < 5; j++){
            userNumber = parseInt(prompt("Inserisci un numero per indovinare la lista precedente"));
            // faccio un'altro loop per ciclare tutti i 5 numeri inseriti precedentemente dall'utente
            // e controllo se il numero inserito dall'utente è uguale alla lista
            // se è corretto push sull'array di corectNumbers
            // se il numero è correcto pussho la lunghezza di corectNumbers in quantitaNumeri
            for( let y = 0; y < 5; y++ ){
                if(userNumber === myArray[y]){
                    corectNumbers.push(userNumber);
                    quantitaNumeri.push(corectNumbers.length);
                }
            }
        }
    }else{
        containerSeconds.innerHTML = seconds;
    }

}, 1000 );

    console.log(corectNumbers);
    console.log(quantitaNumeri);
//-----------------------
// FUNCTION
//-----------------------
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}