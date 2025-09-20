let percent = 95.5;
let grade = "";

if (percent >= 80) {
  grade = "A";
} else if (percent >= 60) {
  grade = "B";
} else if (percent >= 40) {
  grade = "C";
} else {
  grade = "Fail";
}
console.log("Percent = " + percent);
console.log("Grade = " + grade);
