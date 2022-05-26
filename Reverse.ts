// Prese in input due parole
// Creare una terza parola, composta dalla prima e dall'inverso della seconda.
// input  : ciao
// input  : pizza
// output : ciaoazzip
 

 let parola1:string = prompt("Inserisci la prima parola");
 let parola2:string = prompt("Inserisci la seconda parola");

function reverse(parola2:string){
let parola3 = "";
for ( let i = parola2.length - 1; i>=0; i--){
parola3 += parola2[i];
}
return parola3
}
console.log(parola1+(reverse(parola2)));



  