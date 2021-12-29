// 3
const uniqValueOfArr = require('./yaresko6_3');

test('there is one intersection in the objects b: 2', () => {
    expect(uniqValueOfArr([1, 2, 3, 1, 2])).toStrictEqual([1, 2, 3]);
});

test('there are no intersections in objects, get an empty object', () => {
    expect(uniqValueOfArr([1, 2, 3])).toStrictEqual([1, 2, 3]);
});

