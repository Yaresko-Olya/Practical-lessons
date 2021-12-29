// 3
/* Напишите функцию, которая убирает повторяющиеся значения в массиве.
Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
*/

function uniqValueOfArr(array){
    return [...new Set(array)]
}

const data = [1, 2, 3, 1, 2];

console.log(uniqValueOfArr(data));

module.exports = uniqValueOfArr;
