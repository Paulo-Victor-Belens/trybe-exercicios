// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };
// info['recorrente'] = 'Sim';



// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dell´s Four Color Comics #178',
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim',
//   };

// //   console.log('Bem-vinda,', info.personagem );

// console.log(info)

// for (key in info) {
//     console.log(key)
// }
// for (key in info) {
//     console.log(info[key])
// }



// for (let key in info, info2) {
//     console.log(info[key], "e", info2[key],);
// }
// if (info["recorrente"] === info2['recorrente']) {
//     console.log('Ambos recorrentes');
// }
// else {
//     console.log('Algum não é recorrente');
// }



// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };
// leitor['livrosFavoritos'].push(
//     {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
//  }
// ); 
// console.log(leitor['livrosFavoritos'])

// console.log( 'O livro favorito de',leitor['nome'], leitor['sobrenome'],'se chama', leitor['livrosFavoritos'][1]['titulo'] );
  
// console.log(leitor['nome'], "tem", leitor.livrosFavoritos.length, "livros favoritos");

// Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto 
// contendo as seguintes informações:

// Exercício 1

// (Bônus) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

// Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!

// Dicas:

// Uma string é um array de caracteres, então cada elemento do array é uma letra.
// O valor de cada numeral romano é:

// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |

// Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?

// Atenção! Quando você tem um número pequeno à direita de um número grande, eles 
// ,devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda 
// de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.



// let basket =  ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja','Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia','Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate','Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva', 'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva', 'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia','Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia','Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana','Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva','Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca','Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana','Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca','Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva','Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja','Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca','Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca','Banana', 'Pera', 'Abacate', 'Uva' ];
// let melancia = [];
// let uva = [];
// let laranja = [];
// let jaca = [];
// let pera = [];
// let banana = [];
// let abacate = [];

//     for (const element of basket) {
//         if (element === "Melancia") {
//             melancia.push(element)
//         }
//         if (element === "Uva") {
//             uva.push(element)
//         }
//         if (element === "Laranja") {
//             laranja.push(element)
//         }
//         if (element === "Jaca") {
//             jaca.push(element)
//         }
//         if (element === "Pera") {
//             pera.push(element)
//         }
//         if (element === "Banana") {
//             banana.push(element)
//         }
//         if (element === "Abacate") {
//             abacate.push(element)
//         }
//       }


//      console.log('Sua sexta possui:', melancia.length, "melancias",',',uva.length, "Uvas",',',laranja.length,'Laranjas',',',jaca.length, 'Jacas',',',pera.length,'Peras',',',banana.length, 'Bananas','e',abacate.length, "Abacates");

    
// let a = "Serei a melhor pessoa dev";
// let b = "Esse é meu jeito dev de ser!";
// let num = 2;
// let strings = [a, b];


// console.log((typeof b) == a);

// console.log((typeof num) == (typeof 'number'));

// console.log((typeof strings.length) == (typeof num));




