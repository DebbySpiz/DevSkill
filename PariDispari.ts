/*
Si scriva un programma che preso in input un valore numerico, verifichi se questo sia PARI (EVEN) o DISPARI (ODD)
a schermo :
Input: 2
Output:  "Il numero e` pari "
Input: 3
"Il numero e` dispari "



let numero:number = prompt ("Inserisci numero");

if ( numero % 2 ==0 ){
    console.log ("Il numero è PARI");
} else {
         
    console.log ("Il numero è Dispari");
}
 */

let numero:number = prompt ("Inserisci numero");

switch ( numero % 2 ) {
    case 0:  { 
        console.log ("Il numero è Pari");
         break;
     } 
    
         default : {
         console.log ("Il numero è Dispari")
     }

}