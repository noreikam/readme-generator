// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter a title!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter description!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions'
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'Enter usage information'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Enter contribution instructions'
    },
    {
        type: 'input',
        name: 'testInstr',
        message: 'Enter test instructions'
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, markdown) {
    fs.writeFile(fileName, markdown, function (err) {
      if (err) throw err;
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            return generateMarkdown(data);
        })
        .then((markdown) => {
             return writeToFile('./dist/README.md', markdown);
        })
}

// Function call to initialize app
init();
