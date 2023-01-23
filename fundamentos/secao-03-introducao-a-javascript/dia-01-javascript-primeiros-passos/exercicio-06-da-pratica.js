// Como desafio, escreva um código para funcionar tanto se 
// receber o nome de uma peça com letras maiúsculas quanto com 
// letras minúsculas, sem aumentar a quantidade de condicionais.

// // Como dica, você pode pesquisar uma função que faz uma string 
// ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)
let palavra = 'Pato';

switch (palavra.toLowerCase()) {
    case 'rei':
        console.log('pode andar apenas uma casa, para qualquer direção');
        break;
    case 'rainha':
        console.log('pode andar quantas casas quiser, em qualquer direção');
        break;
    case 'bispo':
        console.log('pode andar quantas casas quiser, apenas nas diagonais');
        break;
    case 'cavalo':
        console.log('pode andar apenas em L, sendo que o valor de casas percorridas tem que ser igual a 4');
        break;
    case 'torre':
        console.log('pode andar quantas casas quiser, apenas na horizontal ou vertical');
        break;
    case 'peão':
        console.log('pode andar apenas uma casa, se for a segunda jogada com o mesmo peão, ou duas casas caso seja o primeiro movimento com esse peão, pode ir apenas em frente e pega a peça inimiga na diagonal');
        break;
    default:
        console.log('Peça inválida')
}
