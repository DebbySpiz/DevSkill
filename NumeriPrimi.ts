// DIFFICILE //
// Scrivere un programma restituisca i primi 30 numeri primi.
// Un numero si dice primo se e` divisibile SOLO e soltanto per se stesso e per 1  

let numeri: number[] = []

function isPrime( primi:number) {                             //funzione che verifica se il numero è primo o no
        if(primi == 0 || primi == 1)
            return false;
        for ( let i = 2; i <= primi/2; i++ )
            if (primi % i == 0 )
                return false;
        return true;
    }
let contatore = 100;
for (let i = 1; i <= contatore; i++) {

  if (isPrime(i)) {
    numeri.push(i);                                       // aggiunti all'interno dell'array tramite push
  }
} console.log(" I 30 numeri primi: " + numeri);         // numeri primi mostrati a schermo 
console.log("In totale sono :" + numeri.length);          // totale dei numeri primi trovati da 1 a 100



   
      
     
     
 

      
         