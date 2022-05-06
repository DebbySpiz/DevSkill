/*
Scrivere un programma che popoli due array A , B di dimensione N identica ed arbitraria ( min 5 , Max 10 ) i cui valori sono presi in input.
Successivamente creare un terzo array C di dimensione N dove nelle posizioni pari verranno inseriti i valori dell'array A e in quelle dispari
i valori dell'array B
Considerare 0 come pari
Input: 5
// popolare il vettore
A = [ 1, 3, 4,  5, 6];
B = [ 7, 8, 9, 10,11];
Output: C = [ 1, 8, 4 ,10 ,6];
*/




function array1() :number{
  return +prompt("Inserisci i primi 5 numeri");
}
function array2() :number{
  return +prompt("Inserisci i restanti 5 numeri");
}


let a:number [] = [];
let b:number [] = [];

let c = [];
let count = +prompt("Inserisci il valore dell'Array");
if (count < 5 || count > 10){
  console.log("Non disponibile");
} else {
for ( let i =0; i < count; i++) {
a.push(array1());
}
for ( let i=0; i < count; i++) {
b.push(array2());
}

for (let i = 0; i < count; i++) {
if (i%2 == 0) {
  c.push(a[i]);
}
else {
  c.push(b[i]);
}
}
console.log(c);
}



 


