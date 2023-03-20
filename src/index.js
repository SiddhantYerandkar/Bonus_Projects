const inquirer = require('inquirer');

inquirer
    .prompt([
        { type: 'number', message: 'Pick number of players' }
    ])
    .then((n) => {
        let answer = n * (n - 1) / 2
        console.log(answer);
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });