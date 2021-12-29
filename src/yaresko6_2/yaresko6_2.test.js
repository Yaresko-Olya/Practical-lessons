// 2
const isEqualDeep = require('./yaresko6_2');

test('there is one intersection in the objects b: 2', () => {
    expect(isEqualDeep({}, {})).toBe(true);
});

test('there are no intersections in objects, get an empty object', () => {
    expect(isEqualDeep({ a: NaN }, { a: NaN })).toBe(true);
});

test('there are several intersections in objects a: 1, b: 2, c: 3', () => {
    expect(isEqualDeep({ a: null }, { a: null })).toBe(true);
});

test('there are several intersections in objects a: 1, b: 2, c: 3', () => {
    expect(isEqualDeep({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } })).toBe( true);
});

test('there are several intersections in objects a: 1, b: 2, c: 3', () => {
    expect(isEqualDeep({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 1 } })).toBe( false);
});

test('there are several intersections in objects a: 1, b: 2, c: 3', () => {
    expect(isEqualDeep({ a: [1, 2], b: { c: [1] } }, { a: [1, 2], b: { c: [1] } })).toBe( true);
});

test('there are several intersections in objects a: 1, b: 2, c: 3', () => {
    expect(isEqualDeep({ a: [1, 2], b: { c: [1, 3] } }, { a: [1, 2], b: { c: [1] } })).toBe( false);
});