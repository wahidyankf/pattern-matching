function steps(n, row = 0, step = '') {
  // base case
  if (n === row) {
    return;
  }

  if (step.length === n) {
    console.log(step);
    return steps(n, row + 1);
  }

  const newStep = step.length <= row ? step + '#' : step + ' ';

  steps(n, row, newStep);
}
