let sports = ["Football", "Cricket", "Badminton", "Tennis", "Basketball"];

console.log("First Sport:", sports[0]);
console.log("Last Sport:", sports[sports.length - 1]);

sports.push("Volleyball");
console.log("After Adding Volleyball:", sports);

sports.shift();
console.log("After Removing First Sport:", sports);

let shoppingList = ["Bread", "Eggs", "Butter", "Sugar"];

console.log("Total Items:", shoppingList.length);

if (!shoppingList.includes("Milk")) {
  shoppingList.unshift("Milk");
}
console.log("After Adding Milk (if not present):", shoppingList);

let numbers = [10, 20, 30, 40, 50, 60];

let middleThree = numbers.slice(2, 5);
console.log("Original Array:", numbers);
console.log("Middle Three Numbers:", middleThree);

let frontend = ["HTML", "CSS"];
let backend = ["NodeJS", "Express"];

let fullstack = frontend.concat(backend);
console.log("Fullstack Array:", fullstack);
