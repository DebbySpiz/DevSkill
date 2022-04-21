/*
Si scriva un programma che presi in input 3 valori, verifichi e stampi a schermo quali tra questi e` il piu` grande
a schermo :
E.S
Input: 3 54 12
Output: Il valore piu` grande e` : 54
*/
let numero1:number = prompt ("Inserisci numero uno");
let numero2:number = prompt ("Inserisci numero due");
let numero3:number = prompt ("Inserisci numero tre");


function maggiore (numero1:number, numero2:number, numero3:number): number {
if ( numero1 > numero2 && numero2 > numero3)
{
    console.log ("Il maggiore è " + numero1);
    return numero1;
}
else if (numero2 > numero1 && numero2 > numero3){
    console.log ("Il maggiore è " + numero2);
  return numero2;
}
else {
    console.log ("Il maggiore è " + numero3);
return numero3;
}

}
maggiore(numero1, numero2, numero3);



