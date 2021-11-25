//import employee
const Employee = require("./employee");

class Engineer extends Employee {
  constructor({ github, name, id, email }) {
    super({ name, id, email });
    this.github = github;
  }

  getName() {
    return Engineer.name;
  }

  getId() {
    return Engineer.id;
  }

  getEmail() {
    return Engineer.email;
  }

  getGithub() {
    return Engineer.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
