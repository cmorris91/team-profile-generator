const Employee = require("../lib/employee");

class Engineer extends Employee {
    constructor(name, id, email, github, role) {
        super(name, id, email, role);
        this.github = github;
    }
    getGithub () {
        return this.github;
    }

    getRole () {
        return 'Engineer'
    }
}


module.exports = Engineer;

