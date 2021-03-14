const Employee = require("../lib/employee");

class Intern extends Employee {
    constructor(name, id, email, school, role) {
        super(name, id, email, role);
        this.school = school;
       
    }
    getSchool () {
        return this.school;
    }

    getRole() {
        return 'Intern'
    }
}
function getIntern() {
    getName();
    getId();
    getEmail();
    getRole();
    getSchool();
}
module.exports = Intern;

