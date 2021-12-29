// 1
/* Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.
Ожидаемый результат: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }*/

const intersection = (firstObj, secondObj) => {
    const firstObjKeys = Object.keys(firstObj);

    return firstObjKeys.reduce((acc = {}, key) => {
        if (firstObj[key] === secondObj[key]) { // firstObj['a'] === firstObj.a
            acc = {
                ...acc,
                [key]: firstObj[key],
            };
        }

        return acc;
    }, {});
};

const obj1 = { a: 1, b: 2 } // ['a', 'b']
const obj2 = { c: 1, b: 2 }

console.log(intersection(obj1, obj2));
module.exports = intersection;
