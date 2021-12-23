// 1
const showNumberOrString = require('./yaresko2_1');
describe('test showNumberOrString', ()=> {
    let consoleLog;
    beforeAll(()=>{
        consoleLog = jest.spyOn(console, 'log')

        showNumberOrString(15);
    })

    test('Function calls 8 numbers', () => {
        const calledNumbers = consoleLog.mock.calls.filter((item) => typeof item[0] === 'number');

        expect(calledNumbers.length).toBe(8);
    });

    test('Function calls "three" 4 times', () => {
        const calledStringThree = consoleLog.mock.calls.filter((item) => item[0] === 'three');

        expect(calledStringThree.length).toBe(4);
    });

    test('Function calls "five" 2 times', () => {
        const calledStringFive = consoleLog.mock.calls.filter((item) => item[0] === 'five');

        expect(calledStringFive.length).toBe(2);
    });

    test('Function calls "threeFive" 1 time', () => {
        const calledStringThreeFive = consoleLog.mock.calls.filter((item) => item[0] === 'threeFive');

        expect(calledStringThreeFive.length).toBe(1);
    });
})
