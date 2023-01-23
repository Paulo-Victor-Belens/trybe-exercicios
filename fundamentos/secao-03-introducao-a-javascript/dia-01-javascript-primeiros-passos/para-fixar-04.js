const currentHour = 'peixe';
// Se o horário for maior ou igual a 22, insira “Não deveríamos comer nada, é hora de dormir” na variável “message”.

// Se o horário for maior ou igual a 18 e menor que 22, insira “Rango da noite, vamos jantar :D” na variável “message”.

// Se o horário for maior ou igual a 14 e menor que 18, insira “Vamos fazer um bolo pro café da tarde?” na variável “message”.

// Se o horário for maior ou igual a 11 e menor que 14, insira “Hora do almoço!!!” na variável “message”.

// Se o horário estiver entre 4 e 11, insira “Hmmm, cheiro de café recém-passado” na variável “message”.


if (currentHour >=18 && currentHour <= 22) {
    console.log('Rango da noite, vamos jantar :D');
}
else if (currentHour >= 14 && currentHour < 18) {
    console.log('Vamos fazer um bolo pro café da tarde?');
}
else if (currentHour >= 11 && currentHour < 14) {
    console.log('Hora do almoço!!!');
}
else if (currentHour >= 4 && currentHour < 11) {
    console.log('Hmmm, cheiro de café recém-passado');
}
else if (currentHour > 22 && currentHour < 24 || currentHour > 0 && currentHour < 4) {
    console.log('Não deveríamos comer nada, é hora de dormir');
}
else {
    console.log('Digite uma hora válida');
}