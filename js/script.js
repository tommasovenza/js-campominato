// Il computer deve generare 16 numeri casuali tra 1 e 100.
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> tra 1 e 100, con difficoltà 1 => tra 1 e 80, con difficoltà 2=> tra 1 e 50
// Raccomandazione: andato avanti come sempre un pezzettino alla volta, diamo a variabili e
// funzioni nomi che riflettano il proprio ruolo e prima di iniziare facciamo l’analisi e scriviamo i punti importanti!


// variabili che impostano il gioco
var rangeMaxNumeri = 100;
var numeroBombe = 16;
var numeroTentativiRimasti = rangeMaxNumeri - numeroBombe;

console.log(numeroTentativiRimasti);




// l'array bombe creato con la funzione
var bombe = creaBombe(rangeMaxNumeri, numeroBombe);
console.log(bombe);



// impostazione difficoltà

// definisco le variabili che mi aiuteranno ad impostare il gioco e la sua difficoltà

// var difficoltà = parseInt(prompt('inserisci un numero per impostare la difficolta, 0 = facile, 1 = medio, 2 = difficile'));

// if (difficoltà == 1) {
//     rangeMaxNumeri = 80;
// } else if (difficoltà == 2) {
//     rangeMaxNumeri = 50;
// } else {
//     rangeMaxNumeri = 100;
// }

// il FULCRO DEL PROGRAMMA
var i = 0;
var bombaTrovata = false;
while (i < numeroTentativiRimasti && bombaTrovata == false) {

    // var che definisce il numero che inserirà l'utente
    var numeroUtente = parseInt(prompt('inserisci un numero compreso tra 1 e 100'));

    var bomba = bombe.includes(numeroUtente);

    var punteggio = i;

    if (bomba) {
        alert('sei saltato in aria');
        bombaTrovata = true;
        alert('il tuo punteggio è ' + punteggio);
    }



    i++;
}




// FUNZIONI
// creo una funzione che controlli che il numero inserito nel gioco non si ripeta

// la funzione creaBombe accetta due valori in ingresso, per creare le bombe
function creaBombe(rangeMaxNumeri, numeroBombe) {

    var arrayBombe = [];

    // con un ciclo while di tot iterazioni, in base al numero di bombe prestabilito nella var numeroBombe, ottengo i numeri casuali (16 in questo caso)
    // in questo caso si può togliere il contatore al ciclo: questo infatti si interromperà cmq, dato che il numero di bombe inserito nella variabile definisce la lunghezza dell' array
    while (arrayBombe.length < numeroBombe) {

        var numeroCasuale = Math.floor((Math.random() * rangeMaxNumeri + 1));
        // con push inserisco i numeri che vengono generati nei 16 cicli all'interno dell'arrayBombe
        if (seElementoInArray(numeroCasuale, arrayBombe) === false) {
            arrayBombe.push(numeroCasuale);
            console.log('elemento trovato!');
        }
    }

    // return della funzione
    return arrayBombe;
}


// la funzione controlla se i numeri inseriti non sono già presenti, e nel caso, permette il push nell'array, in modo da creare un array senza doppioni

// --> accetta due valori, l'array da esaminare ed
// --> il numero di cui verificare la presenza

// qui uso il ciclo for alla ricerca dell'elemento
// la funzione ritorna true se l'elemento è presente nell'array, altrimenti false

function seElementoInArray(elemento, arrayDaVerificare) {

    var numeroInArray = false;

    // scorro l'array in cerca dell'elemento, se la trovo la variabile in array tornerà vero e la funzione tornerà true
    for (var i = 0; i < arrayDaVerificare.length; i++) {

        if (elemento === arrayDaVerificare[i]) {
            numeroInArray = true;
        }
    }

    return numeroInArray;
}
