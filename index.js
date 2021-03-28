const inquirer = require('inquirer');
const generateReadMe = require('./utils/readme-template');
const writeFile = require('./utils/generate-readme');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter your title!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a brief decription of your project: (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter a description of your project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'install',
      message: 'Provide a installation instructions for your aplication: (Required)',
      validate: installInput => {
        if (installInput) {
          return true;
        } else {
          console.log('Please enter installation instructions for your application!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information for your aplication: (Required)',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please enter usage information for your application!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Provide contribution guidelines for your aplication: (Required)',
      validate: contributionInput => {
        if (contributionInput) {
          return true;
        } else {
          console.log('Please enter contribution guidelines for your application!');
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license does your application work with?',
      choices: [
        "Apache license 2.0",
        "GNU Affero General Public License v3.0",
        "MIT",
        "None"
      ],
      validate: licenseChoice => {
        if (licenseChoice) {
          return true;
        } else {
          console.log('Please enter a license for your application!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'test-instructions',
      message: 'Provide test instructions for your aplication: (Required)',
      validate: testInput => {
        if (testInput) {
          return true;
        } else {
          console.log('Please enter test instructions for your application!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your email address!');
          return false;
        }
      }
    },
  ]);
};

promptUser()
  .then(userInput => {
    return generateReadMe(userInput);
  })
  .then(markdown => {
    return writeFile(markdown);
  })
  .catch(err => {
    console.log(err);
  });