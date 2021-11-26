const { validateInput, validateNumber } = require("./utils");

const teamQuestion = [
  {
    type: "input",
    name: "teamName",
    message: "Enter the Team name:",
    validate: validateInput,
  },
];

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the Manager name:",
    validate: validateInput,
  },
  {
    type: "input",
    name: "id",
    message: "Enter the Manager employee ID:",
    validate: validateInput,
  },
  {
    type: "input",
    name: "email",
    message: "Enter the Manager email:",
    validate: validateInput,
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Enter the Manager office number:",
    validate: validateNumber,
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the Engineer name:",
    validate: validateInput,
  },
  {
    type: "input",
    name: "id",
    message: "Enter the Engineer employee ID:",
    validate: validateInput,
  },
  {
    type: "input",
    name: "email",
    message: "Enter the Engineer email:",
    validate: validateInput,
  },
  {
    type: "input",
    name: "github",
    message: "Enter the Engineer GitHub username:",
    validate: validateInput,
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the Intern name:",
    validate: validateInput,
  },
  {
    type: "input",
    name: "id",
    message: "Enter the Intern employee ID:",
    validate: validateInput,
  },
  {
    type: "input",
    name: "email",
    message: "Enter the Intern email:",
    validate: validateInput,
  },
  {
    type: "input",
    name: "school",
    message: "Enter the Intern School name:",
    validate: validateInput,
  },
];

const loopQuestion = [
  {
    type: "list",
    name: "role",
    message: "Select the next employee you want to add:",
    choices: ["Engineer", "Intern", "None"],
  },
];

module.exports = {
  teamQuestion,
  managerQuestions,
  engineerQuestions,
  internQuestions,
  loopQuestion,
};
