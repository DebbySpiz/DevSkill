/*
Si scriva un programma che preso in input un valore numerico, verifichi se questo sia POSITIVO o NEGATVO e stampi
a schermo :
Input: 2
Output: "Il numero e` positivo "
Input: -10
Output: "Il numero e` negativo "

*/

let numero:number = prompt ("Inserisci numero");


function positivo (numero:number): number {
    if (numero > 0) {
        console.log("Il numero è Positivo");
        return numero;
    } else {
        console.log("Il numero è Negativo");
    }
    }
    positivo(numero);