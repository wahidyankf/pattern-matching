function reverse(str) {
  return [...str].reduce((accumulator, char) => char + accumulator, '');
}
