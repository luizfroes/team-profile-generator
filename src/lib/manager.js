//import employee
const Employee = require("./employee");

class Manager extends Employee {
  constructor({ name, id, email, officeNumber }) {
    super({ name, id, email });
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {}

  getRole() {}
}

module.exports = Manager;
