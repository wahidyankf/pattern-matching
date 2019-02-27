function anagrams(stringA, stringB) {
  const stringACharMap = generateCharMap(stringA);
  const stringBCharMap = generateCharMap(stringB);

  const stringACharMapKeysLength = Object.keys(stringACharMap).length;
  const stringBCharMapKeysLength = Object.keys(stringBCharMap).length;

  if (stringACharMapKeysLength !== stringBCharMapKeysLength) {
    return false;
  }

  for (let char in stringACharMap) {
    if (stringACharMap[char] !== stringBCharMap[char]) {
      return false;
    }
  }

  return true;
}

function generateCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}
