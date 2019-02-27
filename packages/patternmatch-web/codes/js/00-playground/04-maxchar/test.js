const maxiumCharacter = require('./index');

test('maxiumCharacter function exists', () => {
  expect(typeof maxiumCharacter).toEqual('function');
});

test('Finds the most frequently used char', () => {
  expect(maxiumCharacter('a')).toEqual('a');
  expect(maxiumCharacter('abcdefghijklmnaaaaa')).toEqual('a');
});

test('Works with numbers in the string', () => {
  expect(maxiumCharacter('ab1c1d1e1f1g1')).toEqual('1');
});
