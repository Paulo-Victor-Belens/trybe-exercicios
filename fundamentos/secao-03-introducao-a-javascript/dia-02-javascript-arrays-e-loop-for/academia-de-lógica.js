// Exercicio 01
// let idadeMarina = 27;
// let idadeSilvia = 18;
// let idadeIza = 63;

// if (idadeMarina < idadeIza && idadeMarina < idadeSilvia) {
//     console.log('Marina é a pessoa mais jovem e possui ' + idadeMarina + ' anos');
// }
// else if (idadeSilvia < idadeIza && idadeSilvia < idadeMarina) {
//     console.log('Silvia é a pessoa mais jovem e possui ' + idadeSilvia + ' anos');
// }
// else if (idadeIza < idadeMarina && idadeIza < idadeSilvia) {
//     console.log('Iza é a pessoa mais jovem e possui ' + idadeIza + ' anos');
// }
// else {
//     console.log('Idades iguais!');
// }

// Exercicio 02

// let  age = 27;
// let sex = "M";
// let weigth = 90;
// let height = 182;
// let taxaMetabolicaBasal;

// if (sex === "M") {
//     taxaMetabolicaBasal = (height * 6.25) + (weigth * 9.99) - (age * 4.92) + 5;
// }
// else if (sex === "F") {
//     taxaMetabolicaBasal = (height * 6.25) + (weigth * 9.99) - (age * 4.92) - 161;
// }
// else {
//     console.log('Erro, defina o sexo!');
// }
// console.log(taxaMetabolicaBasal);

//exercicio 03
// let pedido = 6;

// switch (pedido) {
//     case 1: 
//         console.log("1 - Trybe Lanche Feliz");
//         break;
//     case 2:
//         console.log("2 - McTrybe");
//         break;
//     case 3:
//         console.log("3 - TrybeWooper");
//         break;
//     case 4:
//         console.log("4 - X-Trybe");
//         break;
//     case 5:
//         console.log("5 - Triplo Trybe com JS");
//         break;
//     default:
//         console.log("Ainda não possuimos esta opção!");
// }


let pedido = [2, 2, 3, 5];
pedido.sort();
for (let index = 0; index < pedido.length; index = index + 1) {
    if (pedido[index] === 1){
        console.log('1 - Trybe Lanche Feliz');
    }
    else if (pedido[index] === 2){
        console.log('2 - McTrybe');
    }
    else if (pedido[index] === 3){
        console.log('3 - TrybeWooper');
    }
    else if (pedido[index] === 4){
        console.log('4 - X-Trybe');
    }
    else if (pedido[index] === 5){
        console.log('5 - Triplo Trybe com JS');
    }
    else {
        console.log('Ainda não possuímos esta opção :(')
    }
}