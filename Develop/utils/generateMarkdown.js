
const generateMarkdown = function generateMarkdown(response) {

  const readMe = `
 # ${response.projectName}
[![GitHub license](https://img.shields.io/badge/license-${response.license}-important.svg)](${response.URL})

  ## Description
  ${response.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  To install the necessary dependencies, run the following command:
  ${response.command}
  ## Usage
  ${response.usage}
  ## License
  This project is licensed under the ${response.license} license.
  ## Contributing
  ${response.contribution}
  ## Tests
  To run tests, run the following command:
  ${response.tests}
  ## Questions
  If you have any questions about the repo, you can open an issue, or contact ${response.userName} directly at ${response.email}.
  `
      return readMe;
  }



module.exports = generateMarkdown;

