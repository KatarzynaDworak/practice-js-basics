
/* rozwiązanie z pętlą for */
// const x = 4;

// const x = prompt('Podaj liczbę od 1 do 9');
// let result;

// for(let i = 1; i <= 9; i ++) {
    // result = x * i;
    // console.log(x + " * " + i + " = " + result);

    // let multiplyNumber = parseInt(x);
    // result = multiplyNumber * i;
    // console.log(multiplyNumber + " * " + i + " = " + result);
// }   


/* rozwiązanie z pętlą while  */

const a = prompt('Podaj liczbę');
let n = 1;

while(n <= 3) {
    let result = Math.pow(a, n);
    // Jak wyświetlić potęgę?
    // console.log(a + " * " + a + " * " + a + " * " + a + " = " + result); 
    console.log(result);

    n ++;
}