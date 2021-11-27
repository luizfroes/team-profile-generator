const {
  validateInput,
  validateNumber,
  validateString,
  validateEmail,
} = require("./utils");

const teamQuestion = [
  {
    type: "input",
    name: "teamName",
    message: "Enter the Team name:",
    validate: validateString,
  },
];

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the Manager name:",
    validate: validateString,
  },
  {
    type: "input",
    name: "id",
    message: "Enter the Manager employee ID:",
    validate: validateString,
  },
  {
    type: "input",
    name: "email",
    message: "Enter the Manager email:",
    validate: validateEmail,
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
    validate: validateString,
  },
  {
    type: "input",
    name: "id",
    message: "Enter the Engineer employee ID:",
    validate: validateString,
  },
  {
    type: "input",
    name: "email",
    message: "Enter the Engineer email:",
    validate: validateString,
  },
  {
    type: "input",
    name: "github",
    message: "Enter the Engineer GitHub username:",
    validate: validateString,
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the Intern name:",
    validate: validateString,
  },
  {
    type: "input",
    name: "id",
    message: "Enter the Intern employee ID:",
    validate: validateString,
  },
  {
    type: "input",
    name: "email",
    message: "Enter the Intern email:",
    validate: validateString,
  },
  {
    type: "input",
    name: "school",
    message: "Enter the Intern School name:",
    validate: validateString,
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
