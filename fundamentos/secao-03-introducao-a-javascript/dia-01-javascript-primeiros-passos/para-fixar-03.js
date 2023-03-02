const notaPessoaCandidata = -12;
//Se a nota for maior ou igual a 80, imprima “Parabéns, você faz parte do grupo das pessoas aprovadas!”
//Se a nota for menor que 80 e maior ou igual a 60, imprima “Você está na nossa lista de espera”
//Se a nota for menor que 60, imprima “Infelizmente, você reprovou.”

if (notaPessoaCandidata >= 80) {
    console.log('Parabéns, você faz parte do grupo das pessoas aprovadas!');
}
else if (notaPessoaCandidata <= 80 && notaPessoaCandidata >= 60) {
    console.log('Você está na nossa lista de espera');
}
else {
    console.log('Infelizmente, você reprovou.');
}