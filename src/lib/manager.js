//import employee
const Employee = require("./employee");

class Manager extends Employee {
  constructor({ officeNumber, name, id, email }) {
    super({ name, id, email });
    this.officeNumber = officeNumber;
  }

  getName() {
    return Manager.name;
  }

  getId() {
    return Manager.id;
  }

  getEmail() {
    return Manager.email;
  }

  getOfficeNumber() {
    return Manager.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
