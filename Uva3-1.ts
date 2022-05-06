
function input(): number {
  return +prompt("Inserisci numero");
}
function input2(): number {
  return +prompt("Inserisci numero");                       //Funzione che richiama numero in input 
}

function ciclo(n: number): number {                               // Funzione che verifica se il numero dato in input è pari o dispari
  let contatore = 1;                                                //  fino ad arrivare ad 1
  while (n != 1) {                            
    if (n % 2 == 0) {                                             //Controllo pari
      n = n / 2;
    } else {                                                        //In caso esso non sia pari passa all'else 
      n = 3 * n + 1;

    }
    contatore++;                                                    //Incremento

  }
  return contatore;

}




function massimo(i: number, j: number): number {                      //Funzione di calcolo lunghezza del ciclo.
  let max = 0;
  for (let m = i; m <= j; m++) {                                     // Variabile per mantenere il conteggio del ciclo
    let nuovoMassimo = ciclo(m);                                      
    if (nuovoMassimo > max) {                                           //Nuova variabile che aggiorna il risultato della vecchia variabile max inizializzata a 0
      max = nuovoMassimo;
    }                                                                   
  }
  return max;
}
let a: number = input();
let b: number = input();
console.log(a + " " + b + " " + (massimo(a, b)));

