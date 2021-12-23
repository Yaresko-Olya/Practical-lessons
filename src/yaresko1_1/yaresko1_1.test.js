// 1
const isPalindrome = require('./yaresko1_1');

test('if it is palindrome return true', () => {
    expect(isPalindrome('aba')).toBe(true);
});

test('if it is not palindrome return false', () => {
    expect(isPalindrome('apple')).toBe(false);
});

test('if string is empty then return false', () => {
    expect(isPalindrome('')).toBe(false);
});

test('if null return false', () => {
    expect(isPalindrome(null)).toBe(false);
});