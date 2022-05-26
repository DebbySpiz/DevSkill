  // Verificare se una parola e` palindroma .
// Una parola si dice palindroma se letta al contrario ha lo stesso valore
// es. otto anna ossesso
// Creare un programma che letta in input una parola,
// restituisca true se la parola e` palindroma
// falso se non lo e`.


 let  stringa:string = prompt("Inserisci la stringa");
   

   function isPalindrome(stringa:string):boolean {
       let length = stringa.length;
       for ( let i = 0; i < length/2; i++){
           if (stringa.charAt(i) != stringa.charAt(length - i - 1))
           return false;
       }
       return true;
   } 
console.log (isPalindrome(stringa));


  