// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
// Adding some packages that will be needed for the application
const generateMarkdown = require ('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    // Question 1: What is the title for this project?
    {
    type: 'input',
    name: 'title',
    message: 'What is the title for this project?'

    },

// Question 2: What is your GitHub username?
    {
        type: 'input',
        name: 'username',
        message: "What is your GitHub username?",

    },

// Question 3: What is your email address?
    {   type: 'input',
        name: 'email',
        message: "What is your email address?",

    },

// Question 4: What is your project about? Write a short description about it!
    {
        type: 'input',
        name: 'description',
        message: 'What is your project about? Write a short description about it!'

    },

// Question 5: How do you install your project?
    {  
        type: 'input',
        name: 'installation',
        message: 'How to you install your project'

     },

// Question 6: How do you use your project?
    {   
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',

     },

// Question 7: What did you learn when making this project?
     {
        type: 'input',
        name: 'learn',
        message: 'What did you learn when making this project?'
     },

// Question 8: Who contributed to this project?
{
    type: 'input',
    name: 'contributed',
    message: 'Who contributed to this project?'

},

// Question 9: What kind of license should your project have?
     {      
        type: 'checkbox',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: [
            'MIT',
            'GPLv2',
            'Apache',
            'None',
        ]
     },

// Question 9: Final Thoughts?
     {
        type: 'input',
        name: 'thoughts',
        message: 'What are some of your final thoughts?',

     }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        console.log (data, fileName)
            if (err) {
                console.log ("ERROR", err);
            } else { console.log ("Success, your Readme has been created!");}
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generateMarkdown(data));
            console.log (data)
        })
}

// Function call to initialize app
init();

