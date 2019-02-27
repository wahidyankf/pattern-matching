function reverse(str) {
  let reversedString = '';

  for (let char of str) {
    reversedString = char + reversedString;
  }

  return reversedString;
}
