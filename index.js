// Variables and dependancies
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const Engineer = require("./employees/engineer.js");
const Intern = require("./employees/intern.js");
const Manager = require("./employees/manager");
// const generateHtml = require("./utils/employ");


employeeArray = [];



function runApp () {

  function createTeam () {
    inquirer.prompt([{
      type: "list",
      message: "What type of employee would you like to add to your team?",
      name: "addEmployeePrompt",
      choices: ["Manager", "Engineer", "Intern", "No more team members are needed."]
    }]).then(function (userInput) {
      switch(userInput.addEmployeePrompt) {
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
    })
  }};


//manager? prompt
function addManager() {
  return inquirer.prompt([
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

]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmailAddress, answers.managerOfficeNumber);
    teamArray.push(manager);
    createTeam();
  });

};

//intern? prompt
function addIntern() {
    return inquirer.prompt([
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
        name: "internOfficeNumber",
        message: "And what is the office # of the Intern",
      },

    ]).then(answers => {
        const intern = new Intern(answers.interName, answers.internId, answers.internEmailAddress, answers.internOfficeNumber);
        teamArray.push(intern);
        createTeam();
      });
    
    };

  //engineer? prompt
  function addEngineer() {
    return inquirer.prompt([
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
        name: "engineerOfficeNumber",
        message: "And what is the office # of the Engineer?",
      },

    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmailAddress, answers.engineerOfficeNumber);
        teamArray.push(engineer);
        createTeam();
      });
    
    };


    function htmlBuilder () {
        console.log("Team created!")
    
        fs.writeFileSync("./utils/team.js", generateTeam(employeeArray), "UTF-8")
    
    }
    
    createTeam();
    
    
    
    runApp();

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
