const Employee = require('../lib/Employee')
//defines the engineer class and functions
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)

        this.github = github
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;