function steps(n) {
  for (let row = 1; row <= n; row++) {
    let step = '';
    for (let column = 1; column <= n; column++) {
      if (column <= row) {
        step = step + '#';
      } else {
        step = step + ' ';
      }
    }
    console.log(step);
  }
}
