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


let a: number [] = [];
let b: number [] = [];
let c: number []= [];

let count:number = 5;
for ( let i =0; i < count; i++) {
 a.push(prompt("Inserisci numero"));
}
for ( let i=0; i < count; i++) {
 b.push(prompt("Inserisci numero"));
}
for (let i = 0; i < count; i++) {
  if (i%2 ===0) {
    c.push(a[i]);
  }
  else {
    c.push(b[i]);
  }
}

console.log(c);



