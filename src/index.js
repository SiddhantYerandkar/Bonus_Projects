var inquirer = require('inquirer');

inquirer
    .prompt([{type:'list',message:'Pick number of players'}])