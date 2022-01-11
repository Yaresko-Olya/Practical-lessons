const { validator } = require("./practice7-2");


test('1', () => {
    expect(validator.isEmail('test@gmail.com')).toBe(true);
});

test('2', () => {
    expect(validator.isDomain('test.net')).toBe(true);
});

test('3', () => {
    expect(validator.isDate('09.12.2021')).toBe(true);
});

test('4', () => {
    expect(validator.isPhone('+38 (096) 23-14-014')).toBe(true);
});

test('4', () => {
    expect(validator.isPhone('+380 (96) 23-14-014')).toBe(true);
});