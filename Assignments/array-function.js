let numbers = [4, 7, 12, 15, 9];
let modifiedNumbers = numbers.map((n) => (n % 2 == 0 ? n * 2 : n + 1));
console.log(modifiedNumbers);

let even = [12, 5, 8, 130, 44, 3, 25, 60, 7, 90];
let evenNumbers = even.filter((n) => n % 2 == 0);
console.log(`Even Numbers : ${evenNumbers}`);

let bill = [250, 450, 300, 150, 600];
let totalBill = bill.reduce((total, n) => total + n);
console.log(`Total Bill = ${totalBill}`);
