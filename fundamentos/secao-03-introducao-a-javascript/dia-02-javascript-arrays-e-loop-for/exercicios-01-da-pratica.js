// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 

// Percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

// Some todos os valores contidos no array e imprima o resultado;
let resultado01 = 0;
for (let index = 0; index < numbers.length; index = index + 1) {
    resultado01 = resultado01 + numbers[index];
}
console.log(resultado01);

// Calcule e imprima a média aritmética dos valores contidos no array;
let resultadoSoma = 0;
let mediaAritimetica = 0;
for (let soma = 0; soma < numbers.length; soma = soma + 1) {
  resultadoSoma = resultadoSoma + numbers[soma];
  mediaAritimetica = resultadoSoma / numbers.length;
}
console.log(mediaAritimetica);

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

if (mediaAritimetica > 20) {
  console.log('Valor maior que 20!');
}
else {
  console.log('Valor menor ou igual a 20!');
}


// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maiorNumero = [];

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] > maiorNumero){
      maiorNumero = numbers[index];
    }
}
console.log(maiorNumero);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
let numerosImpares = [];

for (let impares = 0; impares < numbers.length; impares += 1) {
  if (numbers[impares] % 2 !== 0) {
    numerosImpares = numerosImpares.push(numbers[impares]);
  }
  else {
    console.log('Nenhum valor impar emcontrato!');
  }
}
console.log(numerosImpares);


let resultado = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    resultado = resultado + 1;
  }
}

if (resultado === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(resultado);
}


// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menorNumero = numbers[0];

for (let menor = 1; menor < numbers.length; menor += 1) {
  if (numbers[menor] < menorNumero) {
    menorNumero = numbers[menor];
  }
}

console.log(menorNumero);


// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
let divisão = 2;
for (index = 1; index <= 25; index += 1) {
  if (index > 0){
    console.log('O resultado de ' + index + ' Dividido por ' + divisão + ' é: ' + (index/divisão))
  }
}




