/*
Prendere in input una sequenza di numeri terminata da -1 e stampare a schermo la lunghezza della sequenza ripetuta piu` lunga.
Una sequenza e` la successione di numeri uguali e consecutiva senza interruzioni di almeno lunghezza 2
Se esistono piu` sequenze con lo stesso valore, stampare la prima di esse
Es.
Input: 0 1 3 4 5 5 5 8 4 3 2 1 1 1 0 9 3 2 1 9 9 9 9 9 -1
Output : 9 con lunghezza 5
Input: 0 1 3 4 5 8 4 3 2 1 0 9 3 2 1 9 -1
Output : Non esiste una sequenza valida
Input: 0 1 3 4 5 5 5 5 5 8 4 3 2 1 1 1 0 9 3 2 1 9 9 9 9 9 -1
Output : 5 con lunghezza 5
 */


function count(): number {
  return +prompt("inserisci un numero, -1 per teminare");
}
let liste: number[] = [];
let input = count();

while (input != -1) {
  liste.push(input);
  input = count();
}

let n = 0;
let occorrenze = 2;
for (let i = 0; i < liste.length; i++) {
  let occ = 1;
  for (let j = i + 1; j < liste.length; j++) {
    if (liste[i] === liste[j]) {
      occ++;
    } if (occ > n) {
      n = occ;
      occorrenze = liste[i];

    }

  }

}
console.log(occorrenze + " Il numero e' ripetuto: " + n);






