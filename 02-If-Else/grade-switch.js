let percent = 45;
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
switch (grade) {
  case "A":
    result = "You Scored Distinction!";
    break;
  case "B":
    result = "You Scored First Class!";
    break;
  case "C":
    result = "You Scored Second Class!";
    break;
  case "Fail":
    result = "You Failed! Better luck next time!";
    break;
  default:
    result = "Invalid Result";
    break;
}
console.log("Result = " + result);
