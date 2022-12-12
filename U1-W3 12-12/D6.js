/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2) {
  console.log(l1 * l2 + " cm^2");
}
area(20, 10);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (n1, n2) {
  let somma = n1 + n2;
  if (n1 === n2) {
    console.log(somma * 3);
  } else {
    console.log(somma);
  }
};
crazySum(5, 15);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (n) {
  let differenza = n - 19;

  if (n > 19) {
    console.log(differenza * 3);
  } else {
    console.log(differenza);
  }
};
crazyDiff(20);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    console.log("TRUE");
  } else {
    console.log("FALSE");
  }
};
boundary(400);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
let frase = [];
const epify = function (string) {
  if (string.charAt(0) === "E") {
    console.log(string);
  } else {
    frase.unshift("EPICODE");
    console.log(frase + " " + string);
  }
};
epify("è molto utile");

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (n) {
  const multiplo3 = n % 3;
  const multiplo7 = n % 7;
  if (multiplo3 === 0 || multiplo7 === 0) {
    console.log("E' multiplo");
  } else {
    console.log("Non è multiplo");
  }
};
check3and7(14);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* const reverseString = function (string) {
  return -string;
};
reverseString("EPICODE");
console.log(string); */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function (string) {};
upperFirst("oggi c'è il sole");

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (string) {
  const array = [];
  array.push(string);
  array.shift();
  array.pop();

  console.log(array);
};

cutString("oggi è proprio una bella giornata");
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = function (n) {
  const random = Math.floor(Math.random() * 10 + 1);
  return n[random];
};
const arrayOfNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(giveMeRandom(arrayOfNumber));
