// let fatorial = 1;

// for (let index = 1; index < 11; index += 1){
//     fatorial = fatorial * index;
// }
// console.log(fatorial);

// let palavra = 'banana';

// let splitPalavra = palavra.split('');
// console.log(splitPalavra);
// let revertePalavra = splitPalavra.reverse();
// console.log(revertePalavra);
// let amarmazenaReverte = revertePalavra.join('');

// console.log(amarmazenaReverte);

// let palavra = 'pato feio'
// let armazenaString = []

// for (let index = palavra.length - 1; index >= 0; index -= 1){
//     armazenaString = palavra[index];
//     console.log(armazenaString);

// }

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let armazezaMaiorString = [];
// for (let index = 1; index < array.length; index += 1) {
//     for (let index2 = 0; index2 < index; index2 += 1){
//         if (array[index2] < array[index]) {
//             armazezaMaiorString = array[index2]
//         }
//     }
// }
// console.log(armazezaMaiorString)
// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let maiorPalavra = array[0];
// let menorPalavra = array[0];

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length > maiorPalavra.length) {
//     maiorPalavra = array[index];
//   }
// }

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length < menorPalavra.length) {
//     menorPalavra = array[index];
//   }
// }

// console.log(maiorPalavra);
// console.log(menorPalavra);

// Um número primo é um número inteiro maior do que 1 que possui 
// somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. 
// Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);