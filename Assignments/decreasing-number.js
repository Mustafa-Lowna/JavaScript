for (let i = 5; i > 0; i--) {
  let line = " ";
  for (let m = 5; m >= 6 - i; m--) {
    line = line + m + " ";
  }
  console.log(line);
}
