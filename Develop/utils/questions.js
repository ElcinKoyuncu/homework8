const questions = [
    
    {
        type: "input",
        name: "userName",
        message: "What is your Github username?"
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?"
      },
      {
        type: "input",
        name: "projectURL",
        message: "What is the URL to your project??"
      },
      {
        type: "input",
        name: "projectName",
        message: "What is your project's name?"
      },
      {
        type: "input",
        name: "description",
        message: "Please write a short description of your project:"
      },
      {
        type: "input",
        name: "licence",
        message: "What kind of licence should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
      },
      {
        type: "input",
        name: "command",
        message: "What command should be run to install dependencies?",
        default: "npm i",
      },
      {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?",
        default: "npm test",
      },
      {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?"
      },
      {
        type: "input",
        name: "contribution",
        message: "What does the user need to know about contributing to the repo?"
      },
      
    ];

    
    module.exports = questions;
    