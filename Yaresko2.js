//task 1

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

for (let i = 0; i < 16; i++) { //! Эту строку можно изменить 
    for (let j = 0; j < 20; j++) { 
        if (i === 15 && j === 15) { 
            return 
        }
    console.log(i, j); 
    }
}



//task 3


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