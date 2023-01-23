const valor1 = 210; 
const valor2 = 400;
let valorDoDesconto = valor1 * (20/100);
let lucroDeUmProduto = valor2 - (valor1 + valorDoDesconto);
let lucroTotal = lucroDeUmProduto * 1000;


if (valor1 < 0 || valor2 < 0) {
    console.log('erro, valores devem ser positivos!');
}
if (lucroDeUmProduto < 0) {
    console.log('Você terá prejuízo de: ' + lucroDeUmProduto);
}

else if (lucroTotal > 0) {
    console.log('esse é o seu lucro em 1000 produtos: ' + lucroTotal);
}
else {
    console.log('apenas números positivos são aceitos!')
}
