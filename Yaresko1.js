// №1

function isPalindrome(str) {
    var palin = str.split("").reverse().join("");
    return palin === str
}
// console.log(isPalindrome("abcba"))

// №2

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
function SumNumbers(string, number){
    if (number  % 3 === 0 && number % 5 === 0 && number % 15 === 0){
        number = number * -1
    }
    string = +string
    return number + string
}
// console.log(SumNumbers('2', 15))

// №4

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