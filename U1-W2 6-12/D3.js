/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let numberMajor = 25;
let numberMinor = 5;

if (numberMajor > numberMinor) {
  console.log("IL NUMERO MAGGIORE E': " + numberMajor);
} else {
  console.log("IL NUMERO MAGGIORE E': " + numberMinor);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const numberOriginal = 5;
const numberDifferent = 10;

if (numberOriginal !== numberDifferent) {
  console.log(numberOriginal + " not equal " + numberDifferent);
} else {
  console.log(numberOriginal + " equal " + numberDifferent);
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const numberMultiplo = 25;
const numberDivisibile = 5;
const numberResto = numberMultiplo % numberDivisibile;

if (numberResto === 0) {
  console.log(numberMultiplo + " divisibile per 5");
} else {
  console.log(numberMultiplo + " non è divisbile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const number1 = 8;
const number2 = 0;

if ((number1 || number2) === 8) {
  console.log("Il numero è 8");
} else {
  console.log("Il numero non è 8");
}
if (number1 + number2 === 8) {
  console.log("La somma è 8");
} else {
  console.log("La somma non è 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const peluche = 24;
const lego = 24;
const spedizione = 10;
const totalShoppingCart = peluche + lego;

if (totalShoppingCart > 50) {
  console.log("ADDEBIO TOTALE: " + totalShoppingCart + " €");
} else {
  console.log("ADDEBIO TOTALE: " + (totalShoppingCart + spedizione) + " €");
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

const sconto = 20 / 100;

if (totalShoppingCart > 50) {
  console.log("ADDEBIO TOTALE: " + totalShoppingCart * sconto + " €");
} else {
  console.log("ADDEBIO TOTALE: " + (totalShoppingCart * sconto + spedizione) + " €");
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

const alfa = 0;
const beta = 25;
const gamma = 8;

if (alfa > beta && alfa > gamma && beta > gamma) {
  console.log("Ordine: " + alfa + " " + beta + " " + gamma);
} else if (alfa > beta && alfa > gamma && gamma > beta) {
  console.log("Ordine: " + alfa + " " + gamma + " " + beta);
} else if (beta > gamma && beta > alfa && alfa > gamma) {
  console.log("Ordine: " + beta + " " + alfa + " " + gamma);
} else if (beta > alfa && beta > gamma && gamma > alfa) {
  console.log("Ordine: " + beta + " " + gamma + " " + alfa);
} else if (gamma > alfa && gamma > beta && alfa > beta) {
  console.log("Ordine: " + gamma + " " + alfa + " " + beta);
} else {
  console.log("Ordine: " + gamma + " " + beta + " " + alfa);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

const tipologia = 5;

if (typeof tipologia === "number") {
  console.log(tipologia + " E' UN NUMERO");
} else {
  console.log(tipologia + " NON E' UN NUMERO");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const lotteria = 14;

if (lotteria % 2 === 0) {
  console.log(lotteria + " è pari");
} else {
  console.log(lotteria + " è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7;
if (val < 10 && val > 5) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

const elimination = me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array.pop();
array.push(100);
console.log(array);
