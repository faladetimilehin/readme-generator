const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require('./questions')




// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program

const init = async () => {
  try {
    const answers = await inquirer.prompt(questions)
    generateMarkdown(answers)
    fs.writeFile('README.md', generateMarkdown(answers), err => {
      err ? console.log(err) : console.log('Success')
    })
  } catch (error) {
    console.log('from try/catch:', error)
  }
}


// function call to initialize program
init();

