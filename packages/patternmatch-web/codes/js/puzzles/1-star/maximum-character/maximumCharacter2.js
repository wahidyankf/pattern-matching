function maximumCharacter(str) {
  const charMap = {};
  let maximumCount = 0;
  let maximumChar = '';

  for (let char of str) {
    charMap[char] = charMap[char]++ || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > maximumCount) {
      maximumCount = charMap[char];
      maximumChar = char;
    }
  }

  return maximumChar;
}
