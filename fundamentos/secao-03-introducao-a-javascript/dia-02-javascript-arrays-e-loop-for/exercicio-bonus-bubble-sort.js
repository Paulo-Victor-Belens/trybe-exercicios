// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// for (let index = 0; index > numbers.length - 1; index += 1) {
//     for (let secondIndex = 0; secondIndex < numbers.length - 1; secondIndex += 1) {
//       if (numbers > numbers[secondIndex+1]) {
//         secondIndex[index], numbers[secondIndex+1]  = numbers[secondIndex+1] , secondIndex[index];
        
//       }
//     }
//   }
//   console.log(numbers);

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    console.log(index < numbers.length)
    console.log('Index ---> ', index);
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    console.log(secondIndex < index);
    console.log('secondIndex ---> ', secondIndex);
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index]; 
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
    secondIndex -= 1;
  }
}
//index
console.log(numbers);