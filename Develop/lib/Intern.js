// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        super.getName();
        super.getId();
        super.getEmail();
        super.getRole(this.role);
        this.role = "Intern";
        this.school = school;
    }

    getSchool() {
        return `Intern School: ${this.school}`
    } 
}

module.exports = Intern;