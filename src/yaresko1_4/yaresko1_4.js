// №4
/*  Создайте функцию, которая проверяет число на соответствие трем различным требованиям:
- число простое - число четное - число кратно 10 Каждый должен возвращать истину или ложь,
которые должны быть представлены в виде массива.
Число всегда будет целым, положительным или отрицательным.
Обратите внимание, что отрицательные числа не могут быть простыми числами,
но могут быть кратными 10. checkNumber(7)  // ==> [true,  false, false]
checkNumber(-10) // ==> [false, true,  true] */
function checkNumber(value){
    let result1 = value > 1
    for (let j = 2; j < value; j++) {
        if (value % j === 0){
            result1 = false
        }
    }
    let result2 = value % 2 === 0
    let result3 = value % 10 === 0
    return [result1, result2, result3]
}
console.log(checkNumber(20))

module.exports = checkNumber;