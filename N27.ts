function inputUtente() :number{
  return +prompt("Inserisci numeri (-1 per terminare) ");
}
function inputUtente2() :number{
  return +prompt("Inserisci numero da controllare");
}
let dividendo:number [] = [];
let input = inputUtente();
while (input != -1){
     dividendo.push(input);
      input = inputUtente();
  }
function consecutivi (){
    let lista = 0;
    let divisore:number=inputUtente2();
    for( let i = 0 ; i < dividendo.length ; i++){
      if(dividendo[i] <= divisore){
            lista++;
           if( lista == divisore )
                return "OK";
             }
        else
            lista = 0;
            }
return "NO";
}
console.log(consecutivi());