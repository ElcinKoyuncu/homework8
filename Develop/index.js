const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./utils/questions");
const generateMarkdown = require("./utils/generateMarkdown");


inquirer.prompt(questions).then((response) => {fs.writeFile("README.md", generateMarkdown(response), function(err) {
  if (err) {
      return console.log(err);
  }
})});