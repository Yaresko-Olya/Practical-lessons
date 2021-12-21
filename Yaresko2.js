//task 1
/* Написать функцию, выводящую в консоль числа от 1 до n (где n — это целое число), 
которая функция принимает в качестве параметра, с такими условиями: 
вывод three вместо чисел, кратных 3; вывод five вместо чисел, кратных 5; 
вывод threeFive вместо чисел, кратных как 3, так и 5.*/
function showNumberOrString(N){
    
    for (let i = 1; i <= N; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            console.log('threeFive')
        }
        else if (i % 3 === 0){
            console.log('three')
        }
        else if (i % 5 === 0 ){
            console.log('five')
        }
        else {
            console.log(i)
        }
    }
    
}
// showNumberOrString(50)



//task 2
/* Нужно выйти из цикла, изменив только две отмеченныестроки. Результат в консоли сейчас останавливается на 19 19.Должен на 15 14.
for (let i = 0; i < 20; i++) { //! Эту строку можно изменить 
    for (let j = 0; j < 20; j++) { if (i === 15 && j === 15) { 
        //! Эту строку можно изменить 
    }
console.log(i, j); } } */

for (let i = 0; i < 16; i++) { //! Эту строку можно изменить 
    for (let j = 0; j < 20; j++) { 
        if (i === 15 && j === 15) { 
            return 
        }
    console.log(i, j); 
    }
}



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
console.log(isAnagram('Morre/', 'ro= me'));
console.log(isAnagram('Аз есмь строка, живу я, мерой остр', 'За семь морей ростка я вижу рост'));
console.log(isAnagram(12, 12));