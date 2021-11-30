// Visualizzare con degli alert 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//genero i miei 5 numeri e li inserisco all'interno di un array
let myArray = [];
for ( let i = 0; i < 5; i++ ){
    let number = getRndInteger(1, 50);
    alert(number);
    myArray.push(number);
}
console.log(myArray);

//prendo dal dom il contenitore e il suo contenuto andandolo a mettere all'interno di let seconds
const containerSeconds = document.getElementById('containerSeconds'); 
let seconds = parseInt(containerSeconds.textContent);
console.log(seconds);

const timer = setInterval(function(){
    seconds = seconds - 1;
    if  ( seconds === - 1 ){
        clearInterval(timer);
    }else{
        containerSeconds.innerHTML = seconds;
    }
    
}, 100 );

//-----------------------
// FUNCTION
//-----------------------
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}