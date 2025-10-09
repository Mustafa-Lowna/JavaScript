let percent = 70;
let grade = "";

if (percent >= 80) {
  grade = "A";
} else if (percent >= 60) {
  grade = "B";
} else if (percent >= 35) {
  grade = "C";
} else {
  grade = "Fail";
}
console.log("Percent = " + percent);
console.log("Grade = " + grade);

let result = "";
if (grade == "A") {
  result = "You Scored Distinction!";
} else if (grade == "B") {
  result = "You Scored First Class!";
} else if (grade == "C") {
  result = "You Scored Second Class!";
} else if (grade == "Fail") {
  result = "You Failed! Better luck next time!";
} else {
  result = "Invalid Result";
}
console.log("Result = " + result);
