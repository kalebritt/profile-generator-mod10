//'employee template'

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }
    getName() {
        return this.name
    };
    getId(){
        return this.id
    };
    getEmail(){
        return this.email
    };
    getRole(){
        return this.role
    }
}

module.exports = Employee;

// const jude = new Employee('Jude', 1, 'jude@jude.com')
// console.log(jude.getName()) //'Jude'