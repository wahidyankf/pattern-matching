function palindrome(str) {
  const reverseString = str => {
    let reversedString = '';

    for (let char of str) {
      reversedString = char + reversedString;
    }

    return reversedString;
  };

  return str === reverseString(str);
}
