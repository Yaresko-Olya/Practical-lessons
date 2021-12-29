// 4
/* Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
Ожидаемый результат: ({}) => true, ({ a: undefined }) => true, ({ a: 1 }) => false */
function isEmpty(object) {
    const objectKeys = Object.keys(object);
    if (objectKeys.length === 0) {
        return true;
    }

    return objectKeys.every((key) => object[key] === undefined);
}

const data = { a: 1, b: undefined };
const data2 = { a: undefined };
console.log(isEmpty(data)); // false
console.log(isEmpty(data2)); // true

module.exports = isEmpty;