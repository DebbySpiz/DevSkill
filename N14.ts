function inputUtente(): number {
  return +prompt("Inserisci numeri (0 per terminare) ");
}
let array: number[] = [];
let input = inputUtente();
while (input != -1) {
  array.push(input);
  input = inputUtente();
}

let stringa: string = "";
function verifica(array: number[]) {
  if (array.length != 0) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 0 || array[i] > 9) {
        return console.log("ERROR");
      } stringa += array[i];
    } console.log(stringa);
    if ((+stringa) % 3 === 0)
      console.log("YES");
    else console.log("NO");
  } else console.log("EMPTY");
}
verifica(array);