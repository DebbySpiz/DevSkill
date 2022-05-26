// Prese in input due parole
// Creare una terza parola, composta dalle lettere della prima e della seconda in maniera alternata.
// input  : ciaop
// input  : pizza
// output : ciazp

let parola1:string = prompt("Inserisci la prima parola");
let parola2:string = prompt("Inserisci la seconda parola");

function concatenazione (parola1:string, parola2:string) {
 let concatenazione = " ";
 for ( let i = 0; i < parola1.length ; i++){
   if (i%2===0){
     concatenazione += parola1[i];
   } else { 
     concatenazione += parola2 [i];
   }
 
 
}
return concatenazione;
}
console.log (concatenazione( parola1,parola2));


/* Seconda soluzione prendendo direttamente l'indice dalle parole inserite fatta */

//console.log (parola1[0] + parola2[1]+ parola1[2] + parola2[2]+ parola1[4])

