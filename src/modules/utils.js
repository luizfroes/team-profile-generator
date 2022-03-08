//import fs
const fs = require("fs");

const generateHtml = ({ teamName, managers, engineers, interns }) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap"
        rel="stylesheet"
      />
  
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="./style.css" />
      <title>TEAM PROFILE GENERATOR</title>
    </head>
    <body>
      <header class="p-3 rounded-lg d-flex justify-content-center header-banner">
        <h1 class="header">${teamName}</h1>
      </header>
      <main class="main">
        <div class="d-flex justify-content-around flex-wrap">
        ${
          managers.length
            ? managers.map((manager) => manager.generateCard()).join("")
            : ""
        }
        ${
          engineers.length
            ? engineers.map((engineer) => engineer.generateCard()).join("")
            : ""
        }
        ${
          interns.length
            ? interns.map((intern) => intern.generateCard()).join("")
            : ""
        }
        </div>
      </main>
      <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
      ></script>
      <script
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
      integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
      ></script>
      <script src="./card-style.js"></script>
    </body>
  </html>`;
};

const categorizeEmployees = (employees) =>
  employees.reduce(
    (acc, each) => {
      if (each.getRole() === "Manager") acc.managers = [...acc.managers, each];

      if (each.getRole() === "Engineer")
        acc.engineers = [...acc.engineers, each];

      if (each.getRole() === "Intern") acc.interns = [...acc.interns, each];

      return acc;
    },
    { managers: [], engineers: [], interns: [] }
  );

const constructAnswersObject = (teamName, employees) => {
  const answers = {};

  answers.teamName = teamName;

  const categorizedEmployees = categorizeEmployees(employees);

  answers.managers = categorizedEmployees.managers;

  answers.engineers = categorizedEmployees.engineers;

  answers.interns = categorizedEmployees.interns;

  return answers;
};

const validateString = (input) => {
  const numberInput = input;

  if (!input) {
    return "This field cannot be empty!";
  }

  if (!isNaN(numberInput)) {
    return "This input should not be a number!";
  }
  return true;
};

const validateNumber = (input) => {
  const numberInput = Number(input);

  if (!input) {
    return "This field cannot be empty!";
  }

  if (isNaN(numberInput) || numberInput <= 0) {
    return "This input should be a valid number!";
  }
  return true;
};

const validateEmail = (input) => {
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
    return "You have entered an invalid email address!";
  }
  return true;
};

// write to file
const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  validateString,
  constructAnswersObject,
  generateHtml,
  writeToFile,
  validateNumber,
  validateEmail,
};
