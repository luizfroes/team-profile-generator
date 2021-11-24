//import inquirer
const inquirer = require("inquirer");
const { Engineer, Manager, Intern } = require("./lib");
const Employee = require("./lib/employee");

// import questions
const {
  teamQuestion,
  loopQuestion,
  managerQuestions,
  engineerQuestions,
  internQuestions,
} = require("./modules/questions");
const { constructAnswersObject } = require("./modules/utils");

const start = async () => {
  let inProgress = true;

  const employees = [];

  //get team name
  const teamName = await inquirer.prompt(teamQuestion);

  //get manager answers
  const { name, id, email, officeNumber } = await inquirer.prompt(
    managerQuestions
  );
  const manager = new Manager({ name, id, email, officeNumber });

  employees.push(manager);

  while (inProgress) {
    const { role } = await inquirer.prompt(loopQuestion);

    if (role === "Engineer") {
      //get engineer answers
      const { name, id, email, github } = await inquirer.prompt(
        engineerQuestions
      );
      const engineer = new Engineer({ name, id, email, github });

      employees.push(engineer);
    }

    if (role === "Intern") {
      //get intern answers
      const { name, id, email, school } = await inquirer.prompt(
        internQuestions
      );
      const intern = new Intern({ name, id, email, school });

      employees.push(intern);
    }

    if (role === "None") {
      inProgress = false;
    }
  }
  console.log(employees);

  //build answers object
  constructAnswersObject(teamName, employees);

  //generate HTML

  //Write to file
};

start();
