// 3
const isAnagram = require('./yaresko2_3');

test('if arguments are anagram then return true', () => {
    expect(isAnagram('abvgd', 'vgbda')).toBe(true);
});

test('if arguments are not a string then return false', () => {
    expect(isAnagram(5, {num: 5})).toBe(false);
});

test('if arguments are not an anagram then return false', () => {
    expect(isAnagram('abvgd', 'abgdn')).toBe(false);
});