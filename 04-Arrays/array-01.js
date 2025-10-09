let countries = ["India", "United Arab Emirates", "Saudi Arabia"];

countries[1] = "Germany";
countries.push("Japan");
countries.push("Canada");

console.log(countries);

console.log("");

let lastCountry = countries.pop();
console.log(lastCountry);

console.log("");

let countryCount = countries.length;
console.log(countryCount);

console.log("");

let j;
console.log("*** List of Countries ***");
console.log("");

for (let i = 0; i < countries.length; i++) {
  j = i + 1;
  console.log("Country #" + j + " -> " + countries[i]);
}
