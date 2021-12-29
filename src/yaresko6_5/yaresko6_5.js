function bind(fn, context, ...rest) {
    return function(...args) {
        const uuid = Date.now().toString();
        context[uuid] = fn;
        const res = context[uuid](...rest, ...args);
        delete context[uuid];
        return res;
    }
}
const user = {
    firstName: '',
    lastName: '',
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

function getFullName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    return this.fullName();
}

console.log(bind(getFullName, user, 'Иван', 'Человеков')()) // => Иван Человеков
bind(getFullName, user, 'Иван')('Человеков') // => Иван Человеков
bind(getFullName, user)('Иван', 'Человеков') // => Иван Человеков

module.exports = bind;
