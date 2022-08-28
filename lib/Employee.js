class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

const jude = new Employee('Jude', 1, 'jude@jude.com')
console.log(jude.name) //'Jude'