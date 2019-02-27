function palindrome(str) {
  return (
    str ===
    [...str].reduce((accumulator, char) => {
      return char + accumulator;
    }, '')
  );
}
