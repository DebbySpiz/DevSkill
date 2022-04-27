//Scrivere un programma che prenda in input una sequenza di numeri, e quando l'utente inserisce -1 termini
//restituendo il valore piu` grande inserito
//E.S 
// Input : 1 9 19 9 1 9 0 -1
// Output : 19

  
    let numeri: number = + (prompt(" inserisci numero"));
  let max:number = numeri;

  while (numeri != -1) {
    if (numeri > max) {
      max = numeri;
    }
numeri = + (prompt("inserisci numeri"));
    }
    console.log(max);
  
   } 
   
      
     
     
 

      
         