const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }

    getRole = () => {
        return this.role
    }
}

module.exports = Manager;
