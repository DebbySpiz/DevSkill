function inputUtente() :number{
    return +prompt("Inserisci numeri (0 per terminare) ");
  }
  let a:number [] = [];
  let input = inputUtente();

while (input !=0) {
  a.push(input);
  input = inputUtente();
}
 let crescente = false;
 let decrescente = false;

function check () : boolean{
   for ( let i = 0; i < a.length - 1; i++){
      if ( a[i+1] > a[i]){
   if (decrescente=== false) crescente = true;
   else return false;
   
} if  ( a[i+1] > a[i]) {
  if (crescente = true){
    decrescente = true;
  }else {
     return false;
}
   }
   
   }
   return crescente && decrescente;
}
 if (check() === true){
   console.log("SI");
 } else {
    console.log("NO");
 }
