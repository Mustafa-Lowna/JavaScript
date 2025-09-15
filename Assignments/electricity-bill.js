let fullName = "John Doe";
let consumer_number = "101";
let unit = 450;
let elecBill = 100;

if (unit >= 1 && unit <= 100) {
  elecBill = unit * 1.5;
} else if (unit >= 101 && unit <= 200) {
  elecBill = unit * 2.5;
} else if (unit >= 201 && unit <= 400) {
  elecBill = unit * 3.5;
} else if (unit > 400) {
  elecBill = unit * 4;
}

console.log("Consumer Name :", fullName);
console.log("Consumer No:", consumer_number);
console.log("Unit Consumed:", unit);
console.log("Bill Amount:", elecBill);
