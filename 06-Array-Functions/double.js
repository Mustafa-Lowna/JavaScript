let numbers = [10, 50, 30, 45, 70];
let doubles = [];
let n;

let len = numbers.length;
for (let i = 0; i < numbers.length; i++) {
  n = numbers[i];
  doubles.push(n * 2);
}
console.log(doubles);
