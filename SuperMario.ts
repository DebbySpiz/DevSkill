/*function inputPassi (){
  return +prompt("Inserisci passi");
}
*/

let array: number []= [];

//let array = [1,2,4,3,5,2,6,4];


let highJump = 0;
let lowJump = 0;
//let passi = inputPassi();
let _num:number;

//let contatore = 8;

for ( let i = 0; i < 8 ; i++ ){
  _num = +prompt ("inserisci");
  array.push(_num);
// array.push(passi);
// passi = inputPassi();
}
for (let i = 0; i< array.length - 1 ; i++) {
  if (array[i] < array [i+1])
  highJump++;
  else if (array[i] > array[i+1])
  lowJump++;
}
console.log(highJump,lowJump);