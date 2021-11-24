const constructAnswersObject = (teamName, roleAnswers) => {
  const answers = {};
  answers.teamName = teamName;
  answers.employees = roleAnswers;
  return answers;
};
