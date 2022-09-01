const Employee = require('../lib/Employee')
//defines the manager class and functions
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)

        this.officeNumber = officeNumber
    }
    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;

