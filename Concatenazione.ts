

function concatenazione (parola1:string, parola2:string): string{
   
    let concatenazione:string = parola1+""+ parola2;
      console.log(concatenazione);
  return concatenazione;
}


let parola1 = prompt ("Inserisci prima parola")
let parola2= prompt ("Inserisci seconda parola")

concatenazione(parola1,parola2);

