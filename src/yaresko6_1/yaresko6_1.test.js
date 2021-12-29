// 1
const intersection = require('./yaresko6_1');

test('there is one intersection in the objects b: 2', () => {
    expect(intersection({ a: 1, b: 2 }, { c: 1, b: 2 })).toEqual({ b: 2 });
});

test('there are no intersections in objects, get an empty object', () => {
    expect(intersection({ a: 1, b: 2, c: 3 }, { b: 1, c: 2 })).toEqual({});
});

test('there are several intersections in objects a: 1, b: 2, c: 3', () => {
    expect(intersection({ a: 1, b: 2, c: 3, e: 5 }, { a: 1, b: 2, c: 3, e: null })).toEqual({ a: 1, b: 2, c: 3 });
});