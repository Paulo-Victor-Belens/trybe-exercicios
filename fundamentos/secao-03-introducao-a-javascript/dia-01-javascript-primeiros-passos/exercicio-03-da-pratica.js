const a = 15;
const b = 15;
const c = 15;

if (a > b && a > c) {
    console.log('a é maior que b e c');
}
else if (b > a && b > c) {
    console.log('b é maior que a e c');
}
else if (c > a && c > b) {
    console.log('c é maior que a e b');
}
else {
    console.log('a, b e c são iguais');
}