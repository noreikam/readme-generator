// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

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
      console.log(licenseName);

      return`
## License
This project is covered by the ${licenseName} license
`

}

// function to build table of contents
function renderTableOfContents(data) {
    // convert data object to array
    const dataArr = Object.entries(data);
    console.log("dataArr:")
    console.log(dataArr);
    // create new array for table of contents, start with Description since it is required
    const contentsArr = ['Description']
    // check which optional values were provided and push to the array
    // start at index 2, 0 is title and 1 is description
    for(i=2; i<dataArr.length; i++) {
        if (dataArr[i][1] != '') {
            contentsArr.push(dataArr[i][0]);
        }
    }
    console.log(contentsArr);

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

${renderLicenseSection(data.license)}
    `
}

module.exports = generateMarkdown;
