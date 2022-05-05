/*
Scrivere un programma che popoli due array A , B di dimensione N,M arbitraria ( min 5 , Max 10 ) i cui valori sono presi in input.
Successivamente creare un terzo array C di dimensione N+M dove nelle posizioni da 0 a N inserite i valori A e nelle posizioni da N+1
a M inserite i valori di B al contrario
Considerare 0 come pari
Input: 5
// popolare il vettore
A = [ 1, 3, 4,  5, 6];
B = [ 7, 8, 9, 10,11];
Output: C = [ 1, 3, 4 ,5, 6, 11,1 0, 9, 8, 7];


*/

function array1() :number{
    return +prompt("Inserisci i primi 5 numeri");
  }
  function array2() :number{
    return +prompt("Inserisci i restanti 5 numeri");
  }
   
  let a:number [] = [];
  let b:number [] = [];
let size = 5; // Array size

     for(let i:number = 0; i < size ; i++){
      a.push(array1());
  }
  for(let i:number = 0; i < size ; i++){
      b.push(array2());
  }
   let c = [];

 
   for(let i = 0; i < size ; i++){
      c.push( a[i]);
  }

  for(let i = b.length -1 ; i >= 0 ; i--) {

   c.push(b[i]);
     }
  console.log(c);
  
 
 
//user eneter array
