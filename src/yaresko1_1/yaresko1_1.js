// №1
/* 1) Написать функцию, которая проверяет является ли строка палиндромом;
function isPalindrome(str) {
} */
function isPalindrome(str) {
    if (!str) {
        return false;
    }
    var palin = str.split("").reverse().join("");
    return palin === str
}
console.log(isPalindrome("aba"))
module.exports = isPalindrome;