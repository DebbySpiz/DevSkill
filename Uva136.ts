function input():number {
    return +prompt("Inserisci numero");}
  
  function isUgly(no:number) {
     
      while (no !== 1) {
          if (no % 2 == 0) {
              no /= 2;
          } else if (no % 3 == 0) {
              no /= 3;
          }
          else if (no % 5 == 0) {
              no /= 5;
          }
          else {
              return false;
          }
      }
      return true;
  }
  function getNthUglyNo():number {
      let i = 1;
      let count = 1;
      while (no > count) {
          i++;
          if (isUgly(i))
              count++;
      }
      return i;
  }
  
  let no =input()
  console.log(getNthUglyNo())
  