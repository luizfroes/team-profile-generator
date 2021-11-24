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

  const roleAnswers = [];

  //get team name
  const teamName = await inquirer.prompt(teamQuestion);

  //get manager answers
  const managerAnswers = await inquirer.prompt(managerQuestions);
  managerAnswers.role = "Manager";
  roleAnswers.push(managerAnswers);

  while (inProgress) {
    const { role } = await inquirer.prompt(loopQuestion);

    if (role === "Engineer") {
      //get engineer answers
      const engineerAnswers = await inquirer.prompt(engineerQuestions);
      engineerAnswers.role = role;
      roleAnswers.push(engineerAnswers);
    }

    if (role === "Intern") {
      //get intern answers
      const internAnswers = await inquirer.prompt(internQuestions);
      internAnswers.role = role;
      roleAnswers.push(internAnswers);
    }

    if (role === "None") {
      inProgress = false;
    }
  }
  console.log(roleAnswers);
  //build answers object
  //constructAnswersObject(teamName, roleAnswers);

  //generate HTML

  //Write to file
};

start();
