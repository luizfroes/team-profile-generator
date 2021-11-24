const teamQuestion = [
  {
    type: "input",
    name: "teamName",
    message: "Enter the Team name:",
  },
];

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the Manager name:",
  },
  {
    type: "input",
    name: "id",
    message: "Enter the Manager employee ID:",
  },
  {
    type: "input",
    name: "title",
    message: "Enter the Manager email:",
  },
  {
    type: "input",
    name: "title",
    message: "Enter the Manager office number:",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the Engineer name:",
  },
  {
    type: "input",
    name: "id",
    message: "Enter the Engineer employee ID:",
  },
  {
    type: "input",
    name: "title",
    message: "Enter the Engineer email:",
  },
  {
    type: "input",
    name: "title",
    message: "Enter the Engineer GitHub username:",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the Intern name:",
  },
  {
    type: "input",
    name: "id",
    message: "Enter the Intern employee ID:",
  },
  {
    type: "input",
    name: "title",
    message: "Enter the Intern email:",
  },
  {
    type: "input",
    name: "title",
    message: "Enter the Intern School name:",
  },
];

const loopQuestion = [
  {
    type: "list",
    name: "role",
    message: "Select the next employee you want to add:",
    choices: ["Manager", "Engineer", "Intern", "None"],
  },
];

module.exports = {
  teamQuestion,
  managerQuestions,
  engineerQuestions,
  internQuestions,
  loopQuestion,
};
