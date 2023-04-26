// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
    if (!data.license) {
      return ''
    }
    return `
    [![License](https://img.shields.io/github/license/${data.github}/${data.title})](https://github.com/${data.github}/${data.title}/blob/master/LICENSE)
    `;
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
    if (!data.license) {
      return ''
    }
    return `- [License](#license)
    `;
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
    if (!data.license) {
      return ''
    }
    return `
    - [View license](https://github.com/${data.github}/${data.title}/blob/master/LICENSE)
    `;
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
    ${renderLicenseBadge(data)}
    
  ## Description
  ${data.description}
  ## Live Link
  [${data.title}](${data.link})
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data)}
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}${renderLicenseSection(data)}
  ## Contribution
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  You can reach me with my [github profile](https://github.com/${data.github})
  or reach me by [Email](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
