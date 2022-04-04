// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js') 

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
        message: 'Enter installation instructions (Required)',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('Please enter installation instructions!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'Enter usage information (Required)',
        validate: usageInfoInput => {
          if (usageInfoInput) {
            return true;
          } else {
            console.log('Please enter usage information!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Enter contribution instructions (Required)',
        validate: contributeInput => {
          if (contributeInput) {
            return true;
          } else {
            console.log('Please enter contribution instructions!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'testInstr',
        message: 'Enter test instructions (Required)',
        validate: testInstrInput => {
          if (testInstrInput) {
            return true;
          } else {
            console.log('Please enter test instructions!');
            return false;
          }
        }
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("Write to file");
    console.log(fileName);
    console.log(data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log(data);
            return generateMarkdown(data);
        })
        .then((markdown) => {
             console.log(markdown);
             return writeToFile('README.md', markdown)
        })
}

// Function call to initialize app
init();
