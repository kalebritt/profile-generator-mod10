// Variables and dependancies
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateTeam = require("./src/generateTeam");

const teamArray = [];


  function createTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What type of employee would you like to add to your team?",
          name: "addEmployeePrompt",
          choices: [
            "Manager",
            "Engineer",
            "Intern",
            "No more team members are needed.",
          ],
        },
      ])
      .then(function (userInput) {
        switch (userInput.addEmployeePrompt) {
          case "Manager":
            addManager();
            break;
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;

          default:
            htmlBuilder();
        }
      });
  }


//manager? prompt
function addManager() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the name of the Manager?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the ID # of the Manager? ",
      },
      {
        type: "input",
        name: "managerEmailAddress",
        message: "What is the email address of the Manager? ",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "And what is the office # of the Manager",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmailAddress,
        answers.managerOfficeNumber
      );
      teamArray.push(manager);
      createTeam();
    });
}

//intern? prompt
function addIntern() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the name of the Intern?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is the ID # of the Intern? ",
      },
      {
        type: "input",
        name: "internEmailAddress",
        message: "What is the email address of the Intern? ",
      },
      {
        type: "input",
        name: "schoolName",
        message: "Where did the Intern go to school?",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.interName,
        answers.internId,
        answers.internEmailAddress,
        answers.schoolName
      );
      teamArray.push(intern);
      createTeam();
    });
}

//engineer? prompt
function addEngineer() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the name of the Engineer?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the ID # of the Engineer? ",
      },
      {
        type: "input",
        name: "engineerEmailAddress",
        message: "What is the email address of the Engineer? ",
      },
      {
        type: "input",
        name: "githubAddress",
        message: "What is the Engineer's GitHub?",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmailAddress,
        answers.githubAddress,
      );
      teamArray.push(engineer);
      createTeam();
    });
}
 
const distFolder = path.resolve(__dirname, "dist");
const distPath = path.join(distFolder, 'employ.html')
function htmlBuilder() {
  console.log("Team created!");

  fs.writeFileSync(distPath, generateTeam(teamArray), "UTF-8");
}




createTeam();

// pomisify
// async function init() {
//   try {
//     // questions and responses
//     const answers = await promptUser();
//     const generateContent = generateHtml(answers);
//     // New readme
//     await writeFileAsync("./utils/employ.html", generateContent);
//     console.log("Success");
//   } catch (err) {
//     console.log(err);
//   }
// }

// init();
