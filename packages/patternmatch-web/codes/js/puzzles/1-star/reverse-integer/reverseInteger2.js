function reverseInteger(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  if (n < 0) {
    return parseInt(reversed, 10) * -1;
  } else {
    return parseInt(reversed, 10);
  }
}
