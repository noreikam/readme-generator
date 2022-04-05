// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    // array to map license value to badge markdown
    const licenseArr = [
        {value: 'apache', badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'},
        {value: 'gnu', badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'},
        {value: 'mit', badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'},
        {value: 'bsd2', badge: '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'},
        {value: 'bsd3', badge: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'},
        {value: 'boost', badge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'}
      ];

      let licenseBadge = '';

      for(i=0; i<licenseArr.length; i++) {
          if(licenseArr[i].value === license) {
              licenseBadge = licenseArr[i].badge;
          }
      }

      return `${licenseBadge}
      `

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'none') {
        return ''
    }

    // array to map license for display
    const licenseArr = [
        {name: 'Apache License 2.0', value: 'apache'},
        {name: 'GNU General Public License v3.0', value: 'gnu'},
        {name: 'MIT License', value: 'mit'},
        {name: 'BSD 2-Clause Simplified License', value: 'bsd2'},
        {name: 'BSD 3-Clause New or Revised License', value: 'bsd3'},
        {name: 'Boost Software License 1.0', value: 'boost'},
        {name: 'None', value: 'none'}        
      ];

      let licenseName = '';

      for(i=0; i<licenseArr.length; i++) {
          if(licenseArr[i].value === license) {
            licenseName = licenseArr[i].name;
          }
      }

      return`
## License
This project is covered by the ${licenseName} license
`

}

// function to build table of contents
function renderTableOfContents(data) {
    // convert data object to array
    const dataArr = Object.entries(data);
    // create new array for table of contents, start with Description since it is required
    const contentsArr = ['Description']
    // check which optional values were provided and push to the array
    // start at index 2, 0 is title and 1 is description
    for(i=2; i<dataArr.length; i++) {
        if (dataArr[i][1] != '') {
            contentsArr.push(dataArr[i][0]);
        }
    }

    // map key names to regular English for display
    for(i=0; i< contentsArr.length; i++) {
        if(contentsArr[i] === 'installation') {
            contentsArr[i] = 'Installation';
        }
        if(contentsArr[i] === 'usageInfo') {
            contentsArr[i] = 'Usage Information';
        }
        if(contentsArr[i] === 'contribute') {
            contentsArr[i] = 'How to Contribute';
        }
        if(contentsArr[i] === 'testInstr') {
            contentsArr[i] = 'Instructions for Testing';
        }
    }

    return `
${contentsArr.join('<br>')}
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
    return `
# ${data.title}
${renderLicenseBadge(data.license)}
## Table of Contents
${renderTableOfContents(data)}

## Description
${data.description}

${renderInstallation(data.installation)}

${renderUsageInfo(data.usageInfo)}

${renderContribute(data.contribute)}

${renderTestInstr(data.testInstr)}

${renderLicenseSection(data.license)}
    `
}

module.exports = generateMarkdown;
