let _num: number = +prompt("Inserisci numero");
let inv: number= 0 ;
let nOriginale = _num;

while ( _num > 0) {
    inv = (inv * 10) + _num % 10;
    _num = Math.floor ( _num/ 10);

}
        console.log((nOriginale - inv));

