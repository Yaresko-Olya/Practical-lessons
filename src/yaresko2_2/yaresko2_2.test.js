// 2
const task2 = require('./yaresko2_2');
describe('test task2', ()=> {
    let consoleLog;
    beforeAll(() => {
        consoleLog = jest.spyOn(console, 'log')

        task2();
    })

    test('Last call contains values: 15, 14', () => {
        expect(consoleLog).toHaveBeenLastCalledWith(15, 14)
    });
});