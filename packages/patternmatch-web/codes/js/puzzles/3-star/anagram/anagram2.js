function anagrams(stringA, stringB) {
  return generateSortedString(stringA) === generateSortedString(stringB);
}

function generateSortedString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}
