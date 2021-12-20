// 1
/* )Cоздать функцию, которая возвращает true или false, в зависимости от того, может ли сумма любых двух чисел из массива быть равной заданному значению.

Другими словами, есть ли в массиве два целых числа x и y, которые при сложении равны указанному значению?

Пример А

Если нам дали массив [1, 2, 4, 9] и значение 8, функция вернет false, потому что никакие два числа из массива не могут дать 8 в сумме.

Пример Б

Но если это массив [1, 2, 4, 4] и значение 8, функция должна вернуть true, потому что 4 + 4 = 8.*/

const getSum = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (i !== j && arr[i] + arr[j] === val) {
          return true;
        };
      };
    };
    return false;
  };
  
const arr = [1, 2, 4, 4];
const val = 8
console.log(getSum(arr, val))

// 2
/*  Напишите функцию, которая преобразует глубокий массив в одномерный.Не используйте array.flat()
Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]*/

const flatten = (array) => array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);


const data1 = [1, 2, [3, 4, [5]]];
console.log(flatten(data1)); // [1, 2, 3, 4, 5]



// 3
/* Напишите функцию, которая разделяет массив на части заданного размера.
Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]*/
const chunk = (array, size) => {
    const chunkedArr = [];
    let index = 0;
    while (index < array.length) {
      chunkedArr.push(array.slice(index, size + index));
      index += size;
    }
    return chunkedArr;
};

const data2 = [1, 2, 3, 4, 5, 6, 7];
console.log(chunk(data2, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
console.log(chunk(data2, 3)) // [[1, 2, 3], [4, 5, 6], [7]]


//   4
/*  Напишите функцию, которая поверхностно сравнивает два объекта.
Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true*/

const isEqual = (firstArray, secondArray) => {
    if (firstArray.length !== secondArray.length) {
      return false;
    }
  
    const compared = firstArray.map((el, id) => secondArray[id] === el);
  
    return !compared.includes(false);
  };

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];
console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr3)); // false
console.log(isEqual(arr1, arr4)); // false