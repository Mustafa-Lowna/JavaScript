console.log("Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("Numbers from 10 to 1:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.log("Odd numbers from 1 to 20:");
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

console.log("Simple Star Pattern:");
for (let i = 1; i <= 5; i++) {
  let stars = '';
  for (let j = 1; j <= i; j++) {
    stars += '*';
  }
  console.log(stars);
}
