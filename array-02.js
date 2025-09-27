let fruits = ["Apple", "Mango", "Orange"];

let firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits);

fruits.unshift("Strawberry");
console.log(fruits);

let index = fruits.indexOf("Orange");
console.log("Position of orange = " + index);

let searchFruit = "Pineapple";
let found = fruits.includes(searchFruit);
console.log(searchFruit + " present in array " + found);

let numbers = [19, 20, 30, 40, 50, 60, 70];
let part = numbers.slice(0, 5);
console.log(part);

let a = [1, 2];
let b = [3, 4, 5];
let c = a.concat(b);
console.log(c);

a.splice(1, 0, 100);
console.log(a);

b.splice(2, 0, 1000);
console.log(b);

let numbers2 = [10, 20, 30];
let total = 0;

for (let i = 0; i < numbers2.length; i++) {
  total = total + numbers2[i];
}

total = 0;
for (let n of numbers2) {
  total = total + n;
}

console.log("Total = " + total);
