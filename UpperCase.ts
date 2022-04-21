//Scrivere un programma che preso in input Il nome e cognome di una persona e li restituisca tutto in maiuscolo
// Cercare sul web come rendere una stringa "uppercase"
// La logica che trasforma il testo, deve essere impletementa dentro una funzione che si chiama : maiuscolo
// Input : Marco Anastasio
// Ouput : MARCO ANASTASIO
 

function upperCase(nome:string,cognome:string):string {
    
 
    let identificativo = nome+ " " +cognome;
     console.log (identificativo.toUpperCase());
     
       return identificativo;
       
    }
    
    let nome:string = prompt ("Scrivi il tuo nome");
     let cognome:string = prompt ("Scrivi il tuo cognome");
 
 upperCase(nome,cognome);