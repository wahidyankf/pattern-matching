function palindrome(str) {
  const reverseString = str => {
    let reversedString = '';

    for (let i = 0; i < str.length; i++) {
      reversedString = str[i] + reversedString;
    }

    return reversedString;
  };

  return str === reverseString(str);
}
