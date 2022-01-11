/*Реализуйте класс Validator, который будет проверять строки.
К примеру, у него будет метод isEmail параметром принимает строку и проверяет,
является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false.
Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate
для проверки даты и метод isPhone для проверки телефона: */
class Validator {
    constructor() {

    }
    isEmail(str) {
        return ((str.indexOf('@') !== -1) && (str.indexOf('.') !== -1))
    }
    isDomain(str) {
        return ((str.indexOf('.com') !== -1) || (str.indexOf('.net') !== -1 || (str.indexOf('.ua') !== -1)) || (str.indexOf('.ru') !== -1));
    }
    isDate(str) {
        let date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
        return date === null ? false : true;
    }
    isPhone(str) {
        let phone = str.match(/\+38\ \([0-9]{3}\)\ [0-9]{2}-[0-9]{2}-[0-9]{3}/) || str.match(/\+380\ \([0-9]{2}\)\ [0-9]{2}-[0-9]{2}-[0-9]{3}/);
        return phone === null ? false : true;
    }

}
let validator = new Validator();
console.log(validator.isEmail('test@gmail.com'));
console.log(validator.isDomain('test.net'));
console.log(validator.isDate('09.12.2021'));
console.log(validator.isPhone('+38 (096) 23-14-014'));
console.log(validator.isPhone('+380 (96) 23-14-014'));

module.exports = { validator };