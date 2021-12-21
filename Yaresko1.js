// №1
/* 1) Написать функцию, которая проверяет является ли строка палиндромом; 
function isPalindrome(str) {
} */
function isPalindrome(str) {
    var palin = str.split("").reverse().join("");
    return palin === str
}
// console.log(isPalindrome("abcba"))

// №2
/*  Написать функцию, которая принимает аргумент и валидирует его по правилам: 
- Строка должна содержать буквы и специальные символы включая пробел: 
[ , ! , : , - , ? , . , , ] - Длина строки должна быть больше 2 символов и меньше 20 
- Начинаться строка должна с заглавной буквы Функция должна вернуть “VALID” или “INVALID”, 
в случае если в аргумент передана не строка вывести ‘Incorrect input data’ 
Без использования регулярных выражений
*/
function isValidValue(myVar){
    
    if (myVar.length < 3 || myVar.length > 19){
        return 'INVALID'  
    }

    if (typeof myVar !== 'string'){
        return 'Incorrect input data'
    }
    let firstLetter = myVar[0]
    if (firstLetter !== firstLetter.toUpperCase()){
        return 'INVALID'
    }
    let arr =  [ ',', '!', ':', '-', '?', '.', ' '] 
    let isTrue = false
    for (let i = 0; i < arr.length - 1; i++){
        if (myVar.includes(arr[i])){
            isTrue = true
        }
        
    }
    if (isTrue === true){
        return 'VALID'
    }
    else{
        return 'INVALID'
    }
    
}
// console.log(isValidValue('A!n'))
// console.log(isValidValue(55))


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
// console.log(SumNumbers('2', 15))

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
    for (var j = 2; j < value; j++) {
      if (value % j === 0){
        result1 = false
      };
    }
    let result2 = value % 2 === 0
    let result3 = value % 10 === 0
    return [result1, result2, result3]
  }
console.log(checkNumber(20))