// array of questions for user
module.exports = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project?',
  },
  {
    type: 'input',
    name: 'tableContent',
    message: 'What is your table of contents?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How can this be installed?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How can this be used?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license should your project have?',
    choices: ['MIT License', 'GNU General Public License (GPL)', 'Unlicense'],
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What does the user need to know about contributing to the repository?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What command should be to run test?',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Questions?',
  },
];