//
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// Generiamo 16 numeri casuali tra 1 e 100 con math random e li metto in un array
var bombe = [];

var totaliNumeri = 100;
var totaliBombe = 16;

    // Ciclo che riempie l'array di bombe fino a 16 elementi
while(bombe.length < totaliBombe) {

    var numeroBombe = bombeCasuali(totaliNumeri);

    if (bombe.includes(numeroBombe) == false) {

        bombe.push(numeroBombe);
    }
}

function bombeCasuali(max) {

    return Math.floor(Math.random() * max) + 1;
}
console.log("bombe", bombe);

    // Creiamo un altro array contentente i numeri immessi dall'utente
var numeriUtente = [];
var bombaTrovata = false;
    
while (numeriUtente.length < (totaliNumeri - totaliBombe) && bombaTrovata == false) {
    
    var numeroInserito = parseInt(prompt("Inserire un numero da 1 a 100"));

    var isNumeroBomba = isBombaTrovata( numeroInserito, bombe );

    if (isNumeroBomba == false) {   
        
        //Se il numero non è compreso tra quelli inseriti, lo aggiungiamo
        if (numeriUtente.includes(numeroInserito) == false) {
            
            numeriUtente.push(numeroInserito);
            
        //Altrimenti continuiamo    
        } else {
            alert("Il numero che hai scelto, è già presente!");
        }
    //  bomba trovata -> bombaTrovata diventa true
    } else {
        alert("Hai trovato una bomba");
        bombaTrovata = true;
    }

    console.log("numeri inseriti dall'utente", numeriUtente);
}

function isBombaTrovata(numero, listaBombe) {
    var trovata = false;

    var i = 0;

    while (i < listaBombe.length && trovata == false) {
        
        var listaNumero = listaBombe[i];

        if (numero == listaNumero) {
            trovata = true;
        }

        i++;
        console.log("indice", i);
    }

    return trovata;
}

// Stampo i numeri corretti 
var totaleNumeriUtente = numeriUtente.length;

var score = "Score: " + totaleNumeriUtente;

var messaggioFinale = "";

if (bombaTrovata) {

    messaggioFinale = "Hai perso! ";

} else {

    messaggioFinale = "Hai vinto! ";

}

alert(messaggioFinale + score);
