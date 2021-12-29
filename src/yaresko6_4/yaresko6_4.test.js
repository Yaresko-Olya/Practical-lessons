// 4
const isEmpty = require('./yaresko6_4');

test('there is one intersection in the objects b: 2', () => {
    expect(isEmpty({ a: undefined })).toBe(true);
});

test('there are no intersections in objects, get an empty object', () => {
    expect(isEmpty({})).toBe(true);
});

test('there are no intersections in objects, get an empty object', () => {
    expect(isEmpty({ a: undefined, b: 1 })).toBe(false);
});

test('there are no intersections in objects, get an empty object', () => {
    expect(isEmpty({ b: 1 })).toBe(false);
});