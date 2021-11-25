//import employee
const Employee = require("./employee");

class Intern extends Employee {
  constructor({ school, name, id, email }) {
    super({ name, id, email });
    this.school = school;
  }

  getName() {
    return Intern.name;
  }

  getId() {
    return Intern.id;
  }

  getEmail() {
    return Intern.email;
  }

  getSchool() {
    return Intern.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
