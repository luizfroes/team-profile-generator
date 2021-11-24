//import inquirer
const inquirer = require("inquirer");

// import questions
const {
  teamQuestion,
  loopQuestion,
  managerQuestions,
  engineerQuestions,
  internQuestions,
} = require("./modules/questions");

const start = async () => {
  let inProgress = true;

  //get team name
  const teamName = await inquirer.prompt(teamQuestion);

  while (inProgress) {
    const role = await inquirer.prompt(loopQuestion);

    if (role === "Manager") {
      const managerAnswers = await inquirer.prompt(managerQuestions);
    }

    if (role === "Engineer") {
      const managerAnswers = await inquirer.prompt(engineerQuestions);
    }

    if (role === "Intern") {
      const internAnswers = await inquirer.prompt(internQuestions);
    }

    if (role === "None") {
      inProgress = false;
    }
  }

  //build answers object

  //generate HTML

  //Write to file
};

start();
