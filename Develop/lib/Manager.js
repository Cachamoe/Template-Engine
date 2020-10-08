// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        super.getName();
        super.getId();
        super.getEmail();
        super.getRole(this.role);
        this.role = "Manager";
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return `Manager's office number: ${this.officeNumber}`
    }
}

module.exports = Manager;