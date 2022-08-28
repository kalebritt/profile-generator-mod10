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
function manager(){
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
        
    ]);
    function intern(){
        return inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the name of the Manager?",
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the ID # of the Manager? "
            },
            {
                type: "input",
                name: "managerEmailAddress",
                message: "What is the email address of the Manager? ",
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "And what is the office # of the Manager"
            },
            
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
 