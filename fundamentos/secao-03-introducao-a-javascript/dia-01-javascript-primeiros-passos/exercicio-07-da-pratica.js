// Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A

// Porcentagem >= 80 -> B

// Porcentagem >= 70 -> C

// Porcentagem >= 60 -> D

// Porcentagem >= 50 -> E

// Porcentagem < 50 -> F

// O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let porcentagem = 100;

if (porcentagem >= 90 && porcentagem <= 100) {
    console.log('Nota A');
}
else if (porcentagem >= 80 && porcentagem < 90) {
    console.log('Nota B');
}
else if (porcentagem >= 70 && porcentagem <80) {
    console.log('Nota C');
}
else if (porcentagem >= 60 && porcentagem < 70) {
    console.log('Nota D');
}
else if (porcentagem >= 50 && porcentagem < 60) {
    console.log('Nota E');
}
else if (porcentagem < 50 && porcentagem >= 0) {
    console.log('Nota F');
}
else {
    console.log('Nota inválida, insira uma nota de 0 a 100');
}

// const grade = 76;

// if (grade < 0 || grade > 100) {
//   console.log("Erro, nota incorreta!");
// } else if (grade >= 90) {
//   console.log("A");
// } else if (grade >= 80) {
//   console.log("B");
// } else if (grade >= 70) {
//   console.log("C");
// } else if (grade >= 60) {
//   console.log("D");
// } else if (grade >= 50) {
//   console.log("E");
// } else {
//   console.log("F");
// }