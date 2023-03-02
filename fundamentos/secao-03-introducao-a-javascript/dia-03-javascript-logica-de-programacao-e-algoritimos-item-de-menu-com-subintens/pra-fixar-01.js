// tilizando o array abaixo, percorra-o somando todos os valores. 
// Caso o valor final seja maior que 15, imprima-o. Caso seja igual 
// ou menor que 15, imprima a mensagem: “valor menor que 16”:


// let fruits = [3, 4, 10, 1, 12];
// let soma = 0;

// for (let index = 0; index < fruits.length; index += 1) {
//     soma = soma + fruits[index];
// }

// if (soma > 15){
//     console.log('Valor maior que 15!');
// }
// else {
//     console.log('Valor menor que 16!');
// }

// Eu resolvi o problema?
// Havia outras maneiras de resolver o problema?
// A maneira que eu escolhi foi a mais eficiente possível?
// Seria possível inverter ou retirar algum passo?
// Se eu fosse um computador, conseguiria entender todas as instruções?
// Lembre-se sempre: se você travar em algum exercício, recomece seu raciocínio 
// com baby steps! Certamente você será capaz de dividir algum passo em outros 
// passos menores. Isso ajudará muito na hora de resolver problemas.

const n = 9;

let resultado = 100;
for (let index = 0; index <= n; index += 1) {
  resultado -= index;
};
console.log(resultado);
