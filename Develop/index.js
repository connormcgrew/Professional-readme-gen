// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: nameInput => !!nameInput || 'Please enter the title of your project!'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project. (Required)',
        validate: descriptionInput => !!descriptionInput || 'Please enter a description of your project!'
    },
    {
        type: 'input',
        name: 'link',
        message: 'Please enter the live link to your project.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please enter installation instructions for your project. (Required)',
        validate: installationInput => !!installationInput || 'Please enter installation instructions for your project!'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information for your project. (Required)',
        validate: usageInput => !!usageInput || 'Please enter usage information for your project!'
    },
    {
        type: 'input',
        name: 'confirmLicense',
        message: 'Would you like to include a license for your project? (Required)',
        default: true,
    },
    {
        type: 'list',
        name: 'license',
        when: answers => answers.confirmLicense,
        message: 'Please enter license information for your project. (Required)',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'licenseName',
        message: 'Please enter the name of the license you would like to use. (Required)',
        when: answers => answers.confirmLicense && answers.license !== 'None',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter contribution guidelines for your project. (Required)',
        validate: contributingInput => !!contributingInput || 'Please enter contribution guidelines for your project!'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter test instructions for your project. (Required)',
        validate: testsInput => !!testsInput || 'Please enter test instructions for your project!'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email information for quesitons and support!',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username. (Required)',
        validate: githubInput => !!githubInput || 'Please enter your GitHub username!'
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log('README created!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        writeToFile('./dist/README.md', generateMarkdown(data));
    });
}

// Function call to initialize app
init();
