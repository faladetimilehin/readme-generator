// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage
${data.usage}
https://drive.google.com/file/d/1AJjq2qnGR7xsKYflAstvBp7PWrRDpWDj/view?usp=sharing

## License

This project is licensed under the ${data.license}.

## Contribution

${data.contribution}

## Tests

${data.tests}

## Questions
${data.questions}
If you have any questions or need further assistance, feel free to contact me:

- GitHub: [Your GitHub Username](https://github.com/faladetimilehin)
- Email: [faladetimilehin@yahoo.com]
`;
}


module.exports = generateMarkdown;
