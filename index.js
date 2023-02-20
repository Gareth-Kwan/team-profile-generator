//Required Declaration
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateTeam = require("./src/template.js");
const Manager = require("./library/Manager.js");
const Engineer = require("./library/Engineer.js");
const Intern = require("./library/Intern.js");

//Outputting the data to our index HTML
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");

//Empty array to be filled by team generator function below
teamArray = [];

function runApp() {
  function createTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Which type of employee would you like to be added to your team?",
          name: "addEmployee",
          choices: ["Manager", "Engineer", "Intern", "Show me my team"],
        },
      ])
      .then(function (userInput) {
        switch (userInput.addEmployee) {
          case "Manager":
            addManager();
            break;
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          case "Show me my team":
            renderHTML();
            break;
          default:
            renderHTML();
        }
      });
  }
  function addManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the manager's name?",
        },

        {
          type: "input",
          name: "managerId",
          message: "What is the manager's employee ID ?",
        },

        {
          type: "input",
          name: "managerEmail",
          message: "What is the manager's email ?",
        },

        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is the manager's office number?",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        teamArray.push(manager);
        createTeam();
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineer's name?",
        },

        {
          type: "input",
          name: "engineerId",
          message: "What is the engineer's employee ID?",
        },

        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's email?",
        },

        {
          type: "input",
          name: "engineerGithub",
          message: "What is the engineer's GitHub username?",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamArray.push(engineer);
        createTeam();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the intern's name?",
        },

        {
          type: "input",
          name: "internId",
          message: "What is the intern's employee ID?",
        },

        {
          type: "input",
          name: "internEmail",
          message: "What is the intern's email?",
        },

        {
          type: "input",
          name: "internSchool",
          message: "What school does the intern attend?",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        teamArray.push(intern);
        createTeam();
      });
  }
  function renderHTML() {
    console.log("Your team has been Generated!");
    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8");
  }
  createTeam();
}

runApp();
