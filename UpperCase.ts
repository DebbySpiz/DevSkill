//Scrivere un programma che preso in input Il nome e cognome di una persona e li restituisca tutto in maiuscolo
// Cercare sul web come rendere una stringa "uppercase"
// La logica che trasforma il testo, deve essere impletementa dentro una funzione che si chiama : maiuscolo
// Input : Marco Anastasio
// Ouput : MARCO ANASTASIO
 

function upperCase(identificativo:string):string {
  return identificativo.toUpperCase();
            
        }

function lowerCase(identificativo:string):string {     
       return identificativo.toLowerCase();
    
 } 
   let identificativo:string = prompt("Scrivi Nome e cognome");
 
   
  if( upperCase(identificativo) == identificativo) {
      console.log (lowerCase(identificativo));
  }    else if( lowerCase(identificativo) == identificativo) {
      console.log (upperCase(identificativo));
  } else { 
      console.log ("Non è possibile eseguire il comando");
  }




   