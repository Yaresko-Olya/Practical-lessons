// №3
/* Создайте функцию, которая принимает два аргумента:
число, представленное в виде строки, и число.
Если аргумент типа number делится на 3, 5 и 15 без остатка - умножьте его на -1.
Функция должна возвращать числовую сумму двух аргументов.
*/
function SumNumbers(string, number){

    if (number  % 3 === 0 && number % 5 === 0 && number % 15 === 0){
        number = number * -1
    }

    string = +string
    return number + string
}
console.log(SumNumbers('2', 15))

module.exports = SumNumbers;