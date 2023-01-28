// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

//   for (let key in names) {
//     console.log('Olá', names[key], 'seja bem-vindo(a)!');
//   }

//   let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//   for (let key in car) {
//     console.log(key, ':', car[key]);
//   }

// function maiorNum(primeiroNum, segundoNum) {
//     if (primeiroNum > segundoNum) {
//       return primeiroNum + ' é maior que ' + segundoNum;
//     } else if (segundoNum > primeiroNum) {
//       return segundoNum + ' é maior que ' + primeiroNum;
//     } else {
//       return 'Os números são iguais';
//     }
//   }
  
//   console.log(maiorNum(10, 20)); // 20 é maior que 10
//   console.log(maiorNum(2, -5)); // 2 é maior que -5
//   console.log(maiorNum(1, 1)); // Os números são iguais


// Faça cinco programas, um para cada operação aritmética básica. 
// Seu programa deve ter duas constantes, a e b, definidas no começo 
// com os valores que serão operados. Faça programas para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)
// function soma(a , b) {
//     return a + b;
// }
// console.log(soma(12, 12));

// function subtrair(a , b) {
//     return a - b;
// }
// console.log(subtrair(12, 12));

// function multiplicar(a , b) {
//     return a * b;
// }
// console.log(multiplicar(12, 12));

// function dividir(a , b) {
//     return a / b;
// }
// console.log(dividir(12, 12));

// function modulo(a , b) {
//     return a % b;
// }
// console.log(modulo(12, 12));



// Faça um programa que retorne o maior de dois números. 
// Defina, no começo do programa, duas constantes com os valores que serão comparados.

function maiorNumero(numero1, numero2) {
    if (numero1 > numero2) {
        return ("Número", numero1, "é maior que", numero2);
    }
    else if (numero1 < numero2) {
        return ("Número", numero2, "é maior que", numero1);
    } 
    else {
        return ("Os números são iguais!");
    }
}

console.log(maiorNumero(6, 5));


// Faça um programa que retorne o maior de três números. 
// Defina, no começo do programa, três constantes com os valores que serão comparados.

// Faça um programa que, dado um valor recebido como parâmetro, 
// retorne “positive” se esse valor for positivo, “negative” se for negativo, 
// e caso não seja nem positivo e nem negativo retorne “zero”.

// Faça um programa que receba três constantes com os valores dos três ângulos 
// internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, 
// caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

