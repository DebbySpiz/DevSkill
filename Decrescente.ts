function array1() :number{
    return +prompt("Inserisci i primi 5 numeri");
  }
  
  let a:number [] = [];
  let n=5
  for(let i:number = 0; i < n ; i++){
        a.push(array1());
    }console.log(a)
  for (let i=0; i<a.length-1; i++) {
        let decrescente = i;
        for (let k=i+1; k<a.length; k++)
           if (a[k] > a[decrescente])
              decrescente = k;
        let b = a[decrescente];
        a[decrescente] = a[i];
        a[i] = b;
     }
  console.log(a)
