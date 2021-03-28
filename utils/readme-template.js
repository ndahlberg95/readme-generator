// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache license 2.0"){
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  };
  if (license === "GNU GPL v3"){
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  };
  if (license === "MIT"){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  };
  if (license === "None"){
    return ''
  };
}

// TODO: Create a function to generate markdown for README

const generateMarkdown = (userInput) => {
  return '# '  +
  
  userInput.title + '\n\n' +

  userInput.description + '\n\n' +

  '## Installation Instructions' + '\n\n' +

  userInput.install + '\n\n' +

  '## Usage' + '\n\n' +

  userInput.usage + '\n\n' +

  '## Contribution Guidelines' + '\n\n' +

  userInput.contribution + '\n\n' +

  '## Questions?' + '\n\n' +

  'Contact me via email: ' + userInput.email + '\n\n' +
  'Contact me via GitHub: ' + userInput.github + '\n\n' +

  '### License' + '\n\n' +

  renderLicenseBadge(userInput.license)
};

module.exports = generateMarkdown;