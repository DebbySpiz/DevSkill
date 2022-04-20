/*
Si scriva un programma che preso in input l'anno di nascita, stampi a schermo l'eta`:
Input : 1992
Output : "Hai 30 anni";
Input : 2010
Otuput: "Hai 12 anni";


let anno_nascita: number = prompt ("Inserisci il tuo anno");
let anno: number = prompt ("Inserisci l'anno");

let eta = anno - anno_nascita;
if ( anno < anno_nascita) {
    eta = anno_nascita - anno;
 } else {
     eta = anno - anno_nascita;
 }
    console.log ("Stampa la mia età " + eta )
*/

let anno: number = prompt ("Inserisci l'anno");
let anno_nascita: number = prompt ("Inserisci il tuo anno");

let eta = anno - anno_nascita ;
switch (eta) {
    case ((eta = anno_nascita - anno)): { console.log( " Stampa la mia età " + eta); 
    break
    }
    case (( eta = anno - anno_nascita) ): { console.log( " Stampa la mia età " + eta); 
    break
    }

default : { console.log (" Non riesco a calcolare l'età"); break}
    }








