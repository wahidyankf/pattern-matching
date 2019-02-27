// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxiumCharacter("abcccccccd") === "c"
// maxiumCharacter("apple 1231111") === "1"

function maxiumCharacter(str) {
  const charMap = {};
  let max = 0;
  let maxiumCharacter = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxiumCharacter = char;
    }
  }

  return maxiumCharacter;
}

module.exports = maxiumCharacter;
