// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
if (data.license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
}
if (data.license === 'Apache') {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
}
if (data.license === 'GPL') {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
}
if (data.license === 'BSD') {
    return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`
}
if (data.license === 'None') {
    return ``
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
if (data.license === 'MIT') {
    return `https://opensource.org/licenses/MIT`
}
if (data.license === 'Apache') {
    return `https://opensource.org/licenses/Apache-2.0`
}
if (data.license === 'GPL') {
    return `https://www.gnu.org/licenses/gpl-3.0`
}
if (data.license === 'BSD') {
    return `https://opensource.org/licenses/BSD-3-Clause`
}
if (data.license === 'None') {
    return ``
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
if (data.license === 'MIT') {
    return `This project is licensed under the terms of the MIT license.`
}
if (data.license === 'Apache') {
    return `This project is licensed under the terms of the Apache license.`
}
if (data.license === 'GPL') {
    return `This project is licensed under the terms of the GPL license.`
}
if (data.license === 'BSD') {
    return `This project is licensed under the terms of the BSD license.`
}
if (data.license === 'None') {
    return ``
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
