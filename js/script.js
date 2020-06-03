// Il computer deve generare 16 numeri casuali tra 1 e 100.
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.



// con un ciclo for di 16 iterazioni creo l'array con le bombe
function generaBombe() {
    // array vuoto
    var bombe = [];

    for (i = 1; i < 17; i++) {
        // generiamo un numero casuale
        var numero = getRndInteger(1, 100);
    
        bombe.push(numero);
    }

    return bombe;  
}

var bombeArray = generaBombe();
console.log(bombeArray);


// chiedo all'utente di inserire un numero
var y = 1;
var bombaTrovata = false;
while(y <= 10 && bombaTrovata === false) {

    var numeroUtente = parseInt(prompt('inserisci un numero'));
    console.log(numeroUtente);
    var verificaBomba = bombeArray.includes(numeroUtente);

    if(verificaBomba) {
        bombaTrovata === true;
        alert('sei saltato in aria!');
    }
    y++
}




// prendiamo la funzione dei 16 numeri casuali
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


