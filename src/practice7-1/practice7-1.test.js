const { str } = require("./practice7-1");


test('return reverse str', () => {
    expect(str.reverse('Привет мир')).toBe('рим тевирП');
});

test('return big first letter str', () => {
    expect(str.ucFirst('привет мир')).toBe('Привет мир');
});

test('return big first letter every words in phrase', () => {
    expect(str.ucWords('привет дивный мир')).toBe('Привет Дивный Мир');
});

