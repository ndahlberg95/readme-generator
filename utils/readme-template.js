// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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

  userInput.license
};

module.exports = generateMarkdown;