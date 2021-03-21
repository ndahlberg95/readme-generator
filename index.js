const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');

const promptUser = projectData => {
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
        name: 'install-instructions',
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
        name: 'usage-description',
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
        name: 'contribution-guidelines',
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
            "Academic Free License v3.0", 
            "Apache license 2.0",
            "Artistic license 2.0",
            "Boost Software License 1.0",
            "BSD 2-clause Simplified License",
            "BSD 3-clause New/Revised License",
            "BSD 3-clause Clear License",
            "Creative Commons License Family",
            "Creative Commons Zero v1.0 Universal",
            "Creative Commons Attribution 4.0",
            "Creative Commons Attribution Share Alike 4.0",
            "Do What The F*ck You Want To Public License",
            "Educational Community License v2.0",
            "Eclipse Public License 1.0",
            "Eclipse Public License 2.0",
            "European Union Public License 1.1",
            "GNU Affero General Public License v3.0",
            "GNU General Public License Family",
            "GNU General Public License v2.0",
            "GNU General Public License v3.0",
            "GNU Lesser General Public License Family",
            "GNU Lesser General Public License v2.1",
            "GNU Lesser General Public License v3.0",
            "ISC",
            "LaTeX Project Public License v1.3c",
            "Microsoft Public License",
            "MIT",
            "Mozilla Public License 2.0",
            "Open Software License 3.0",
            "PostgreSQL License",
            "SIL Open Font License 1.1",
            "University of Illinois/NCSA Open Source License",
            "The Unlicense",
            "zLib License",
        ],
        validate: licenseChoice => {
            if (licenseChoice) {
              return true;
            } else {
              console.log('Please enter test instructions for your application!');
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
  .then(projectData => {
    return generatePage(projectData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });