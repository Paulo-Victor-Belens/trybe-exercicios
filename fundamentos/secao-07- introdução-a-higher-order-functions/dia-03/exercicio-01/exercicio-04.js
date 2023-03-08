const names = [
  'Aanemarie', 'Adervandes', 'Akifusa', 
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
//const expectedResult = 20;

// const countA = () => {
//   const armazenaLetras = [];
//   names.forEach((nome) => {
//     const nomeSplit = nome.toLowerCase().split('');
//     for (let conteudo of nomeSplit) {
//       armazenaLetras.push(conteudo)
//     }
//   })
//   let somaDosA = 0;
//   for (let conteudo of armazenaLetras) {
//     if (conteudo === 'a') {
//       somaDosA += 1;
//     }
//   }
//   return somaDosA;
// }
// console.log(countA());

const countA = () => {
  const armazenaLetras = [];
  names.map((nome) => {
    const nomeSplit = nome.toLowerCase().split('');
    for (let conteudo of nomeSplit) {
      armazenaLetras.push(conteudo)
    }
  })
  const contagemA = armazenaLetras.reduce((acc, curr) => {
    if (curr === 'a') {
      acc += 1;
    } return acc;
  }, 0) 
  return contagemA;
}
console.log(countA());