function palindrome(str) {
  const reverseString = str => {
    return str
      .split('')
      .reverse()
      .join('');
  };

  return str === reverseString(str);
}
