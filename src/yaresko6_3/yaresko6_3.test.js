// 3
const uniqValueOfArr = require('./yaresko6_3');

test('the given array [1, 2, 3, 1, 2], the resulting array after eliminating duplicates [1, 2, 3]', () => {
    expect(uniqValueOfArr([1, 2, 3, 1, 2])).toStrictEqual([1, 2, 3]);
});

test('no repeats array remains unchanged [1, 2, 3]', () => {
    expect(uniqValueOfArr([1, 2, 3])).toStrictEqual([1, 2, 3]);
});

