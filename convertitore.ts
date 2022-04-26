// Creare un convertitore di misurazioni, deve permettere la conversione di una misurazione da un unita` di misura ad un altra.
// Il programma dovra` chiedere all'utente quale tipo di misurazione vorrebbe convertire.
// le unita` di misura supportate sono riportate in tabella:
// Gradi    (1)    | centigradi (C) | fahrenheit (F)  |
// Distanza (2)    | kilometri (KM) | miglia (MI)     |
// L'utente puo` specificare il tipo di misurazione che vuole convertire usando 1 per gradi e 2 per distanza e successivamente
// fornire i seguenti valori : 
//      il valore misurato
//      l'unita` di misura originale
// Il programma dovra` restituire in output la conversione corretta .

// Esempio :
// Output: "Che tipo di misurazione vuoi convertire ? "
// Input: 1 
// Output: "Inserisci i seguenti valori:"
// Input: "Misurazione originale" 32
// Input: "Unita` di misura originale" C
// Output: "Il valore convertito e`: 89,6 F"

// Esempio :
// Output: "Che tipo di misurazione vuoi convertire ? "
// Input: 2
// Output: "Inserisci i seguenti valori:"
// Input: "Misurazione originale" 100
// Input: "Unita` di misura originale" KM
// Output: "Il valore convertito e`: 62,13 MI"

let misure:number = prompt("Che tipo di misurazione vuoi convertire?");


function scelta(risposta:number):void{
    let unitaOriginale:string=prompt("Inserisci l'unita` di misura originale");
    let misuraOriginale:number=prompt("Inserisci la misurazione originale");
    if (risposta == 1){                                                                 
        if (unitaOriginale =="c" || unitaOriginale =="C"){                                          //Caratteri letti sia in minuscolo che maiuscolo
           console.log("Il valore convertito e`" + celsiusToFahrenhait(misuraOriginale) + "F");       //stampa il valore convertito in F
        }else if (unitaOriginale == "f"|| unitaOriginale == "F"){
            console.log("Il valore convertito e`" + fahrenhaitToCelsius(misuraOriginale) + "C");       //stampa il valore convertito in C
        }
    }else if(risposta == 2){
        if (unitaOriginale == "km" || unitaOriginale == "KM"){                                      //Caratteri letti sia in minuscolo che maiuscolo
           console.log("Il valore convertito e`" + kilometerToMiles(misuraOriginale) + " MI");          //stampa il valore convertito in MI  
        }else if (unitaOriginale == "mi" || unitaOriginale == "mi"){
           console.log("Il valore convertito e`" + milesToKilometer(misuraOriginale) + " KM");           //stampa il valore convertito in KM
        }
    }
}

scelta(misure);
 
function celsiusToFahrenhait (gradi:number): number {           //Converte da Celsius a Fahrenhait
     let cToF: number = gradi*1.8 + 32;
     return cToF;
  } 
 
 function fahrenhaitToCelsius (gradi:number): number {          //Converte da  Fahrenhait a Celsius 
    let fToC:number = gradi -32 * 5 / 9;
     return fToC ;
 }
   
 function kilometerToMiles (distanza:number): number {          //Converte da Kilometri a Miglia
    let kToM:number = distanza * 0.6214;
      return kToM;
}
function milesToKilometer(distanza:number) : number {           //Converte da Miglia  a Kilometri 
    let mToK:number = distanza * 1.609;
    return mToK;
}



  

         
         
     
 

 