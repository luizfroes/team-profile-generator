//import employee
const Employee = require("./employee");

class Engineer extends Employee {
  constructor({ github, name, id, email }) {
    super({ name, id, email });
    this.github = github;
  }

  getGithub() {}

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
