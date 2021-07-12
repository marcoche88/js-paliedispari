/*
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

    // validazione numero utente
    if (!userNumber || isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
        return;
    }

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

// funzione per numeri random
function numberGenerator(max, min) {
    max++;
    return Math.floor(Math.random() * (max - min)) + min;
}

// funzione per numeri pari o dispari
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}


/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

/*
1- selezionare input e bottone
2- aggiungere evento al click del bottone
3- prendere la parola inserita dall'utente
4- usare una funzione per capire se la parola è palindroma:
   a- prendere la parola e separare le lettere in un array
   b- invertire con un for la parola iniziale
   c- vedere se la parola invertita è uguale a quella iniziale
5- stampare il risultato
*/

// variabili
var wordInput = document.getElementById("word");
var wordButton = document.getElementById("button-word");
var result = document.getElementById("result");

// aggiungere evento al click del bottone verifica
wordButton.addEventListener("click", function () {
    // prendere il valore dell'input
    var userWord = wordInput.value;

    // controllo input
    if (!userWord || userWord.trim() === "") {
        return;
    }

    // vedere con la funzione se la parola è palindroma o no e stampare risultato
    if (isPalindrome(userWord)) {
        result.innerText = "La parola " + userWord.toUpperCase() + " è palindroma";
    } else {
        result.innerText = "La parola " + userWord.toUpperCase() + " non è palindroma";
    }

})

// funzione per verificare se una parola è palindroma
function isPalindrome(word) {
    // separare la parola in un array
    var wordArray = word.trim().split("");

    // invertire la parola iniziale
    var wordReverse = "";
    for (var i = wordArray.length - 1; i >= 0; i--) {
        wordReverse += wordArray[i];
    }

    // verificare se le due parole sono uguali
    if (word.trim().toLowerCase() === wordReverse.trim().toLowerCase()) {
        return true;
    }
    return false;
}

// BONUS
// funzione per verificare se la frase è palindroma

function isPalindromePhrase(phrase) {
    var phraseArray = phrase.trim().split(" ");
    var phraseNoSpace = phraseArray.join("");

    return isPalindrome(phraseNoSpace);

}

console.log(isPalindromePhrase("I topi non avevano nipoti"));