//Scrivere un programma che calcoli il massimo in un vettore di dimensione 10 (valori presi da input)
//E.S
// Input A = [ 1 9 200 9 1 9 0 50]
// Output : 200
let v:number [] = [];
let max: number = [0];
for (let i=0; i < 10; i++) {
 v[i] = +(prompt("Inserisci numero" + (i + 1)));
  if (v [i] > max){
  max=v [i];
  }
}
 alert("Il valore più grande dell'array è " + max);