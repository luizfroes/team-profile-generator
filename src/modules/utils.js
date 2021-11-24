const constructAnswersObject = (teamName, employees) => {
  const answers = {};
  answers.teamName = teamName;
  answers.employees = employees;
  return answers;
};

const validateInput = (input) => {
  if (!input) {
    return "This field cannot be empty!";
  }
  return true;
};

module.exports = { validateInput, constructAnswersObject };
