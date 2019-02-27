function maximumCharacter(str) {
  const charMap =
    (typeof str === 'string' &&
      str.split('').reduce((accumulator, char) => {
        accumulator[char] = !accumulator[char] || 1;

        return accumulator;
      }, {})) ||
    {};

  const {maximumChar} = Object.keys(charMap).reduce(
    (accumulator, char) => {
      if (charMap[char] > accumulator.maximumCount) {
        accumulator.maximumCount = charMap[char];
        accumulator.maximumChar = char;
      }

      return accumulator;
    },
    {
      maximumChar: '',
      maximumCount: 0,
    }
  );

  return maximumChar;
}
