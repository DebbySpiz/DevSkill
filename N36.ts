function inputUtente() :number{
    return +prompt("Inserisci numeri ");
  }
  function inputUtente2() :number{
    return +prompt("Inserisci divisore");
  }

let a:number [] = [];

for(let i:number = 0; i < 10 ; i++){
    a.push(inputUtente());
   }

    let x:number= inputUtente2(); 

    function divisione():boolean {
      for (let i = 0; i < 4; i++) {
if (  a[i] % x == 0) {
  return false
} else return true
      }
    } 
     if (divisione() === true){
   console.log("OK");
 } else {
    console.log("no");
 }