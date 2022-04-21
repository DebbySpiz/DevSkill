let x:number = prompt ("inserisci il primo numero");
let y:number = prompt ("inserisci il secondo numero");

function addizione (x:number, y:number): number {
   let somma:number = +x +  +y;
   console.log("Il risultato dell'Addizione è: " + somma) ;
   return somma;
}
function sottrazione (x:number, y:number): number {
  let somma:number = x - y;
  console.log("Il risultato della Sottrazione è:" +somma) ;
   return somma;

}
function moltiplicazione (x:number, y:number): number {
  let somma:number = x * y;
   console.log("Il risultato della Moltiplicazione è:" +somma) ;
   return somma;
    }
    function divisione (x:number, y:number): number {
        let somma:number = x / y;
   console.log("Il risultato della Divisione è:" +somma); 
   return somma;
   }

addizione(x,y);
sottrazione(x,y);
moltiplicazione(x,y);
divisione(x,y);
