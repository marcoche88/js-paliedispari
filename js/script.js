/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

/* PARI O DISPARI
1-slezionare gli input e bottone
2-aggiungere evento al click  del bottone
3-prendere i valori inseriti dall'utente
4-usare funzione per generare numero random del computer
5-sommare i due numeri
6-usare funzione per vedere se la somma è pari o dispari
7-stampare il vincitore
*/

// variabili
var evenOdd = document.getElementById("even-odd");
var number = document.getElementById("number");
var playButton = document.getElementById("button");
var userNumberDisplay = document.getElementById("user-number");
var cpuNumberDisplay = document.getElementById("cpu-number");
var winner = document.getElementById("winner");

// evento al click del bottone gioca
playButton.addEventListener("click", function () {
    // prendere i valori degli input/select
    var userChoice = evenOdd.value;
    var userNumber = number.value;

    // generare numero random cpu da 1 a 5
    var cpuNumber = numberGenerator(5, 1);

    // sommare i due numeri
    var sum = parseInt(userNumber) + cpuNumber;

    // vedere se la somma è pari o dispari
    var sumIsEven = isEven(sum);

    // stampare numero giocatore e cpu
    cpuNumberDisplay.innerText = "Il numero del Computer è: " + cpuNumber;
    userNumberDisplay.innerText = "Il numero del Giocatore è: " + userNumber;

    // stampare vincitore
    if ((sumIsEven && userChoice === "even") || (!sumIsEven && userChoice === "odd")) {
        winner.innerText = "Il vincitore è il GIOCATORE";
    } else {
        winner.innerText = "Il vincitore è il COMPUTER";
    }

})


function numberGenerator(max, min) {
    max++;
    return Math.floor(Math.random() * (max - min)) + min;
}

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}