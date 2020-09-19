const readline = require('readline');

/*
The question() method shows the first parameter and waits for the user input.
It calls the callback function once enter is pressed.
*/
/*
const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
readlineInterface.question(`What's your name?`, name => {
  console.log(`Hi, ${name}!`);
  question.close();
}); */

/*
::: inquirer :::
[inquirer](https://github.com/SBoudrias/Inquirer.js)
*/
const inquirer = require('inquirer');
const question = [
  {
    type: 'input',
    name: 'name',
    message: `What's your name?`,
  },
];
inquirer
  .prompt(question)
  .then(answers => console.log(`Hi ${answers.name}!!`));
