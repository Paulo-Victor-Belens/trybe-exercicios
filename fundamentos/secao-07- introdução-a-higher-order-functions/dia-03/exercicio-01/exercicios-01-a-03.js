const { countries } = require('./dataBase');
//1 - Calcule a quantidade total da população de todos os países.
//const expectedResult = 120797034;
const getPopulation = () => countries
  .reduce((acc, curr) => acc + curr.population, 0);

console.log(getPopulation());

//2 - Calcule a área total de todos os países.
//const expectedResult = 4311757;
const getTotalArea = () => countries
  .reduce((acc, curr) => acc + curr.area, 0);

getTotalArea();

//3 - Encontre o país com o maior nome.
// const expectedResult = {
//   name: 'American Samoa',
//   region: 'Oceania',
//   currencies: [{ code: 'USD', name: 'United States Dollar' }],
//   capital: 'Pago Pago',
//   population: 55197,
//   area: 199
// }
const longestName = () => countries
  .reduce((acc, curr) => acc.name.length > curr.name.length ? acc : curr);

console.log(longestName());