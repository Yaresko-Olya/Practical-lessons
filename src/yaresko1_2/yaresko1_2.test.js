// 2
const isValidValue = require('./yaresko1_2');

test('too few characters', () => {
    expect(isValidValue('a')).toBe('INVALID');
});

test('too many characters', () => {
    expect(isValidValue('Mango is my favorite fruit, that I want to eat every day')).toBe('INVALID');
});

test('beginning not with a capital letter', () => {
    expect(isValidValue('a /df')).toBe('INVALID');
});

test('not a string entered, but a different type', () => {
    expect(isValidValue(5)).toBe('Incorrect input data');
});

test('everything is entered correctly', () => {
    expect(isValidValue('Amk bhj-df?')).toBe('VALID');
});

test('if string is empty return \'INVALID\'', () => {
    expect(isValidValue('')).toBe('INVALID');
});

test('if null throw TypeError: Cannot read properties of null (reading \'length\')', () => {
    expect(()=>{
        isValidValue(null)
    }).toThrow(new TypeError('Cannot read properties of null (reading \'length\')'));
});