// 4
const bind = require('./yaresko6_5');


test('there are no intersections in objects, get an empty object', () => {
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

test('there is one intersection in the objects b: 2', () => {
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

test('there are no intersections in objects, get an empty object', () => {
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

test('there are no intersections in objects, get an empty object', () => {
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


