// Creare un software che calcoli il BMI di una persona dato : altezza ( piedi ) , peso ( libre )
// BMI = peso in kg / (statura in metri * statura in metri)
// E stampi in output la corrispettiva costituzione in base alla tabella :
//Sottopeso severo  < 16,5
//Sottopeso da 16,5 a 18,4
//Normale   da 18,5 a 24,9
//Sovrappeso    da 25 a 30
//Obesità primo grado   da 30,1 a 34,9
//Obesità secondo grado da 35 a 40
//gskianto  > 40
// Dopo aver mostrato a schermo il risulato , verra` chiesto all'utente se vuole effettuare una misurazione
// piu` precisa. Se la risposta e` affermativa,
// viene chiesto un parametro aggiuntivo : circonferenza polso ( cm ) e il sesso . Venga stampata la
// rispettiva costituzione seguendo la seguente tabella :
// Donna    Costituzione    Uomo
// < 15     Esile           < 17
// 15-16    Normale         17-18
// > 16     Robusta         > 18
//Input : 5.4 170
//Output: Sovrappeso
//Output: Vuoi effettuare una misurazione precisa ?
//Input: si
//Output : Inserisci la circonferenza del polso e il tuo sesso
//Input: 17 M
//Output: La tua costituzione e` : NORMALE
//Input : 5.4 170
//Output: Sovrappeso
//Output: Vuoi effettuare una misurazione precisa ?
//Input: No
//Output : Arrivederci

let feet:number = prompt("Inserisci la tua altezza");
let libre:number = prompt("Inserisci il tuo peso");

let altezza = feet/3.2808; // FORMULA PER CONVERTIRE FEET IN METER
let peso = libre/2.2046; // FORMULA PER CONVERTIRE POUND TO KILOGRAM
let BMI:number = (peso/(altezza*altezza )); // CALCOLO BODY MASS INDEX

 
if (BMI<16.5) {
    console.log ("Sei Sottopeso Severo");
    }
    else if (BMI >= 16.5 && BMI < 18.4) {
        console.log ("Sei Sottopeso");
    }
    else if (BMI >= 18.5 && BMI < 24.9) {
        console.log ("Sei Normale");
    }
     else if (BMI >= 25 && BMI < 30) {
        console.log ("Sei Sovrappeso");
    }
     else if (BMI >= 30.1 && BMI < 34.9) {
        console.log ("Non va bene, Obesità secondo grado");
    }
     else if (BMI >= 40) {
        console.log ("Sei un gskianto");
    }
    
    let si:string = "si";
    let no:string = "no";
    let risposta:string = prompt ("Vuoi effettuare una misurazione più precisa?");

    if (risposta == "si" ) {
        
        let sesso:string = prompt("Inserisci il sesso");
        let polso:number = prompt("Inserisci circonferenza polso")
     
        if (sesso == "f"){
            if (polso <=15) { console.log ("La tua costituzione è Esile"); } 
             else if (polso >= 15 && polso <= 16) { console.log ("La tua costituzione è nella norma");}
         else if (polso >16) { console.log("Sei un pò Robustella u.u");}
        }
         if (sesso == "m"){ 
             if (polso <=17) {console.log ("La tua costituzione è Esile");
        } else if (polso >= 17 && polso <= 18) { console.log ("La tua costituzione è nella norma");}
         else if (polso >=18) { console.log("Sei un pò Robustella u.u");   }
        else  {console.log ("Ti sei spaventato ah?");  }
         }


 

