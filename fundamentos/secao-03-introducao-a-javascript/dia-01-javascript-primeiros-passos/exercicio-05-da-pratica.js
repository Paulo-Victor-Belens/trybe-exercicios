const angulo01 = 70;
const angulo02 = 70;
const angulo03 = 40;
let anguloValido = true

if (angulo01 <= 0 || angulo02 <= 0 || angulo03 <= 0){
    console.log('Inválido,valores devem ser maiores que 0');
}

else if ((angulo01 + angulo02 + angulo03) === 180) {
    console.log(anguloValido + ', É um ângulo válido');
}

else if ((angulo01 + angulo02 + angulo03) < 180){
    console.log(!anguloValido + ', Não é um ângulo válido');
}

else {
    console.log('Não é um Triângulo!!!');
}