// Variables and dependancies
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const Engineer = require("./employees/engineer");
const Intern = require("./employees/intern");
const Manager = require("./employees/intern")
const generateMarkdown = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);

//User questions
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What did you name your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Provide a description of the project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if any: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is the intention of the project?"
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who else contibuted to the project?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is it possible to test the project?"
        },
        {
            type: "input",
            name: "questions",
            message: "How can I fix any issues with the project? "
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);
} 

// pomisify 
  async function init() {
    try {
        // questions and responses
        const answers = await promptUser();
        const generateContent = generateMarkdown(answers);
        // New readme
        await writeFileAsync('README.md', generateContent);
        console.log('Success');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();  
 