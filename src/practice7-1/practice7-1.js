/*Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
который параметром принимает строку; а возвращает ее в перевернутом виде, метод
ucFirst(), который параметром принимает строку; а возвращает эту же строку, сделав ее
первую букву заглавной и метод ucWords, который принимает строку и делает заглавной
первую бухву каждого слова этой строки.*/
class MyString {
    constructor() {
    }
    reverse(str) {
        let reversStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversStr = reversStr + str[i];
        }
        return reversStr;
    }
    ucFirst(str) {
        let newStr = str[0].toUpperCase() + str.slice(1);
        return newStr;
    }
    ucWords(str) {
        let arr = str.split(' ');
        let strArr = [];
        for (let i = 0; i < arr.length; i++) {
            let a = arr[i];
            let newStr = a[0].toUpperCase() + a.slice(1);
            strArr.push(newStr);
        }
        return strArr.join(' ');
    }

}
let str = new MyString();
console.log(str.reverse('Привет мир'));
console.log(str.ucFirst('привет мир'));
console.log(str.ucWords('привет дивный мир'));

module.exports = { str };