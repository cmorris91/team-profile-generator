const Employee = require("../lib/employee");

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        super(name, id, email, role);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole () {
        return 'Manager'
    }
}

function generateManager() {
    getName();
    getId();
    getEmail();
    getRole();
    getOfficeNumber();


};

module.exports = Manager;
