//task 3
/* Нужно написать функцию, которая проверяет,
являютсяли две строки анаграммами, причем регистр букв не имеет значения.
Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
Анаграмма- слово, которое содержит все буквы другого слова в том же количестве,
но ином порядке*/

function isAnagram(strA, strB){
    if(typeof strA !== 'string' || typeof strB !== 'string'){
        return false
    }
    strA = strA.replace(/\W/g, '').toLowerCase().split('').sort().join('');
    strB = strB.replace(/\W/g, '').toLowerCase().split('').sort().join('');
    return strA === strB
}

module.exports = isAnagram

