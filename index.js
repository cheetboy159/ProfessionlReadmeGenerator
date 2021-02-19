// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer.prompt([
    // GIVEN a command - line application that accepts user input
    // WHEN I am prompted for information about my application repository
    // THEN a high - quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    // WHEN I enter my project title
    // THEN this is displayed as the title of the README
    {
        type: "input",
        message: "what is the project title?",
        name: "title"
    },
    // WHEN I enter a description, 
    {
        type: "input",
        message: "Describe your application",
        name: "description"
    },
    // installation instructions, 
    {
        type: "input",
        message: "How to install app?",
        name: "installation"
    },
    // usage information, 
    {
        type: "input",
        message: "How to use?",
        name: "information"
    },
    // contribution guidelines, 
    {
        type: "input",
        message: "Any contribution credits?",
        name: "contribution"
    },
    // and test instructions
    {
        type: "input",
        message: "How to use app?",
        name: "instructions"
    },
    // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    // WHEN I choose a license for my application from a list of options
    // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    {
        type: "List",
        message: "What liceses used?",
        name: "license",
        choices: ["Apache", "MIT", "Eclipse", "GNU", "BSD", "Mozilla", "The Unlicese"]
    },
    // WHEN I enter my GitHub username
    // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    {
        type: "input",
        message: "GitHub username: ",
        name: "username"
    },
    // WHEN I enter my email address
    // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    {
        type: "input",
        message: "email address: ",
        name: "questions"
    }
    // WHEN I click on the links in the Table of Contents
    // THEN I am taken to the corresponding section of the README
]).then(questions =>{
    title,
    description,
    installation,
    information,
    contribution,
    instructions,
    license,
    username,
    questions,
    console.log(questions);
})
function readMeSetup(){
    `#${title}

    *[Description](description)
    *[Installation](installation)
    *[Information](information)
    *[Contribution](contribution)
    *[Instructions](instructions)
    *[License](license)
    *[Questions](Questions)

    

    `
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeToFile(`./${fileName.toLowerCase(' ').join('')}.md`, data)
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
