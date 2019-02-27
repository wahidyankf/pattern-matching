function palindrome(str) {
  return str
    .split('')
    .every((char, index) => char === str[str.length - index - 1]);
}
