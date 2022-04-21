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

let anno_corrente: number = prompt ("Inserisci l'anno");
let anno_nascita: number = prompt ("Inserisci il tuo anno");



function calcoloAnni (anno_nascita:number, anno_corrente:number):number{
    let  calcoloAnni = anno_corrente - anno_nascita && anno_nascita -anno_corrente;
    
   console.log (calcoloAnni);
    return calcoloAnni;
}

calcoloAnni(anno_corrente,anno_nascita);







