//task 2
/* Нужно выйти из цикла, изменив только две отмеченныестроки. Результат в консоли сейчас останавливается на 19 19.Должен на 15 14.
for (let i = 0; i < 20; i++) { //! Эту строку можно изменить
    for (let j = 0; j < 20; j++) { if (i === 15 && j === 15) {
        //! Эту строку можно изменить
    }
console.log(i, j); } } */
function task2() {
    for (let i = 0; i < 16; i++) { //! Эту строку можно изменить
        for (let j = 0; j < 20; j++) {
            if (i === 15 && j === 15) {
                return
            }
            console.log(i, j);
        }
    }
}

module.exports = task2;