// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// function to build table of contents
function renderTableOfContents(data) {
    return `
Table of contents
`
}

// functions to render the optional sections, will return '' if no response was provided
function renderInstallation(installation) {
    if (installation === '') {
        return '';
    }

    return `
## Installation
${installation}
`
}

function renderUsageInfo(usageInfo) {
    if (usageInfo === '') {
        return '';
    }

    return `
## Usage Information
${usageInfo}
`
}

function renderContribute(contribute) {
    if (contribute === '') {
        return '';
    }

    return `
## How To Contribute
${contribute}
`
}

function renderTestInstr(testInstr) {
    if (testInstr === '') {
        return '';
    }

    return `
## Testing Instructions
${testInstr}
`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    console.log("generateMarkdown");
    console.log(data);


    return `
# ${data.title}

## Table of Contents
${renderTableOfContents(data)}

## Description
${data.description}

${renderInstallation(data.installation)}

${renderUsageInfo(data.usageInfo)}

${renderContribute(data.contribute)}

${renderTestInstr(data.testInstr)}
    `
}

module.exports = generateMarkdown;
