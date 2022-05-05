// DIFFICILE //
// Scrivere un programma prenda una sequenza di numeri, terminata -1.
// Restituisca il numero con il piu` alto numero di occorrenze .

// Input : 2 3 4 2 3 1 0 1 4 4 4 0 9 19 5 -1
// Ouput : Il numero con piu` occorrenze e` 4 

function count() : number {
  return +prompt("inserisci un numero, -1 per teminare");
}

    let array_elements:number []= []
    let input = count();

    while (input != -1) {
      
      array_elements.push(input);
      input = count();
    }
    let current = 0;
    var cnt = 0;
    for (let i = 0; i < array_elements.length; i++) {
 let occ = 1;
      for ( let j =  i + 1; j < array_elements.length; j++) {
        if (array_elements[i] === array_elements[j]){
          occ++;
        }
      }
        if (occ > current) {
          current = occ;
          cnt = array_elements[i];
          
            
        }   
    }
    console.log (cnt + " Il numero e' ripetuto: " + current);
   
      
     
     
 

      
         