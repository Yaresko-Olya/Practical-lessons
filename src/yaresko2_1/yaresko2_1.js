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

module.exports = showNumberOrString;