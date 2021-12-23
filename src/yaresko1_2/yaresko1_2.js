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
console.log(isValidValue('A!n'))
console.log(isValidValue(55))
module.exports = isValidValue;