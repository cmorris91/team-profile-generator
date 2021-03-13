const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber, role) {
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

module.exports = Manager;
