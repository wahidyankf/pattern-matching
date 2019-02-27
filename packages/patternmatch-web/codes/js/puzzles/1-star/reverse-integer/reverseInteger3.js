function reverseInteger(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reversed, 10) * Math.sign(n);
}
