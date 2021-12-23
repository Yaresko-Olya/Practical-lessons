// 4
const checkNumber = require('./yaresko1_4');

test('20 return prime number = false, even = true, multiple = true', () => {
    expect(checkNumber(20)).toEqual([ false, true, true ]);
});

test('15 return prime number = false, even = false, multiple = true', () => {
    expect(checkNumber(15)).toEqual([ false, false, false ]);
});

test('13 return prime number = true, even = false, multiple = false', () => {
    expect(checkNumber(13)).toEqual([ true, false, false ]);
});

test('6 return prime number = false, even = true, multiple = false', () => {
    expect(checkNumber(6)).toEqual([ false, true, false ]);
});

test('7 return prime number = true, even = false, multiple = false', () => {
    expect(checkNumber(7)).toEqual([ true, false, false ]);
});

test('70 return with not prime number = true, even = true, multiple = true', () => {
    expect(checkNumber(70)).not.toEqual([ true, true, true ]);
});

test('0 return with not prime number = true, even = true, multiple = false', () => {
    expect(checkNumber(0)).not.toEqual([ true, true, true ]);
});