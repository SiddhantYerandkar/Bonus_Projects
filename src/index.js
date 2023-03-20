const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'number',
            name: 'numberOfPlayers',
            message: 'Pick number of players'
        },
    ])
    .then(answers => {
        let n = answers.numberOfPlayers
        let answer = n * (n - 1) / 2
        console.info('Answer:', answer);
    });