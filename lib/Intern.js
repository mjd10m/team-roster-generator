const Employee = require('../lib/Employee')
//defines the intern class and function
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)

        this.school = school
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return 'Intern'
    }
}

module.exports = Intern;