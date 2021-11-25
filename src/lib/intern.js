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

  generateCard() {
    return `<div class="row">
    <div class="card">
      <div class="card-top">
        <div class="overlay">
          <h1>READ</h1>
        </div>
        <img class="card-img" src="./assets/images/intern-icon.png" />
      </div>
      <div class="triangle">
        <div class="circle-button">
          <img
            class="close"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/324479/close.svg"
          />
        </div>
      </div>
      <div class="card-middle">
        <h5 class="more">Name: ${this.name}</h5>
        <h5 class="more">ID: ${this.id}</h5>
        <h5 class="more">Email: <a href="mailto:${this.email}">${this.email}</a></h5>
        <h5 class="more">School: ${this.school}</h5>
      </div>
      <div class="card-bottom text-center">
        <h2 class="card-title">Intern</h2>
      </div>
    </div>
  </div>`;
  }
}

module.exports = Intern;
