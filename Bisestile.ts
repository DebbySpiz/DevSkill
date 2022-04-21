/*
Si scriva un programma che preso in input un anno, stampi a se questo e` bisestile o meno.
Un anno si dice bisestile SE e SOLO SE :
    E` divisibile per 400
    E` divisibile per 4 ma non per 100
Input : 1600
Output : "l'anno e` bisestile";
Input : 1601
Otuput: "L'anno non e` bisestile";
Input : 1696
Otuput: "L'anno e` bisestile";
*/

let anno:number = prompt("Inserisci l'anno");

if(anno%400==0){
    console.log("E' bisestile") ;

} else if (anno%4==0) {
    if(anno%100!=0){
        console.log("E' bisestile");
    }else {
        console.log("Non è bisestile");
    }
}else{
    console.log("Non è bisestile");
}




 

function isBisestile(anno:number):boolean {

    if (anno % 400 == 0 || anno%4 ==0 && anno % 100 != 0) {
      
        return true;
    } else {
        return false; 
         }
       }
    
    let anno:number = prompt ("Scrivi l'anno");
    console.log ((isBisestile(anno)));
   


