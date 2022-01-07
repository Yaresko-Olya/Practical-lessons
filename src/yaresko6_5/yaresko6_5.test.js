// 4
const bind = require('./yaresko6_5');


test('function start check', () => {
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
    expect(bind(getFullName, user)).toBeInstanceOf(Function);
});

test('first output configuration option', () => {
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
    expect(bind(getFullName, user, 'Иван')('Человеков')).toBe('Иван Человеков');
});

test('second output configuration option', () => {
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
    expect(bind(getFullName, user, 'Иван', 'Человеков')()).toBe('Иван Человеков');
});

test('third output configuration option', () => {
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
    expect(bind(getFullName, user)('Иван', 'Человеков')).toBe('Иван Человеков');
});


