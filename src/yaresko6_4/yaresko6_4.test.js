// 4
const isEmpty = require('./yaresko6_4');

test('with value undefined we get true', () => {
    expect(isEmpty({ a: undefined })).toBe(true);
});

test('empty object gets true', () => {
    expect(isEmpty({})).toBe(true);
});

test('with value undefined + number we get false', () => {
    expect(isEmpty({ a: undefined, b: 1 })).toBe(false);
});

test('with value number we get false', () => {
    expect(isEmpty({ b: 1 })).toBe(false);
});