// 3
const SumNumbers = require('./yaresko1_3');

test('if arguments are "2" & 15 return -13', () => {
    expect(SumNumbers('2', 15)).toBe(-13);
});

test('if arguments are "17" & 15 return 2', () => {
    expect(SumNumbers('17', 15)).toBe(2);
});

test('if arguments are "3" & "12" return 15', () => {
    expect(SumNumbers('3', '12')).not.toBe(15);
});

test('if arguments are 5 & 10 return 15', () => {
    expect(SumNumbers(5, 10)).toBe(15);
});

test('if arguments are "0" & 52 return 52', () => {
    expect(SumNumbers('0', 52)).toBe(52);
});

test('if arguments are "2" & 0 return 2', () => {
    expect(SumNumbers('2', 0)).toBe(2);
});

test('if arguments are "" & 0 return 0', () => {
    expect(SumNumbers('', 0)).toBe(0);
});

test('if arguments are null & 0 return 0', () => {
    expect(SumNumbers(null, 0)).toBe(0);
});

test('if arguments are "2" & -10 return -8', () => {
    expect(SumNumbers('2', -10)).toBe(-8);
});