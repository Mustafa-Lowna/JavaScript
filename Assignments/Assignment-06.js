let fruits = ["Apple", "Banana", "Orange"];
fruits[1] = "Mango";
fruits.push("Pineapple");
fruits.push("Grapes");
let lastFruit = fruits.pop();

console.log("Last fruit removed: " + lastFruit);
console.log("Total fruits: " + fruits.length);
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit #" + (i + 1) + " -> " + fruits[i]);
}
