function printOdds(limit) {
  for (let i = 1; i <= limit; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

printOdds(20);
console.log("");

function printSquares(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i + " → " + i * i);
  }
}

printSquares(5);
console.log("");

function reverseCount(start) {
  for (let i = start; i >= 1; i--) {
    console.log(i);
  }
}

reverseCount(10);
console.log("");

function printFactorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  console.log("Factorial of " + n + " is " + fact);
}

printFactorial(5);
console.log("");
