const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("../lib/employee");
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const GenerateTeam = require('../lib/generateTeam')

const managerArray= [];
const engineerArray = [];
const internArray = [];

const questions = () => {

    inquirer
    .prompt ([
        {
            type: 'input',
            message: "What is the employee's name?",
            name: 'name'
        },
        {
            type: 'input',
            message: "What is the employee's email?",
            name: 'email'
        },
        {
            type: 'input',
            message: "What is the employee's ID number?",
            name: 'id'
        },
        {
            type: 'list',
            message: "What is the employee's role?",
            choices: ['Manager', 'Intern', 'Engineer'],
            name: 'role'
          },
    ])
    .then((answers) => {
        console.log(answers);
        if(answers.role === 'Manager') {
            inquirer
            .prompt ([
                {
                    type: 'input',
                    message: "What is the Manager's office number?",
                    name: 'office'
                }
            ])
            .then((ans) => {
                const newManager = new Manager(answers.name, answers.id, answers.email, answers.role, ans.office);
            
                managerArray.push(newManager);
                console.log(managerArray);

                addMore();
            })
            .catch(err => console.log(err))

        }
        else if(answers.role === 'Engineer') {
            inquirer
            .prompt ([
                {
                    type: 'input',
                    message: "What is the Engineer's Github username?",
                    name: 'github'
                }
            ])
            .then((ans) => {
                const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.role, ans.github);
                engineerArray.push(newEngineer);

                addMore();
            })
            .catch(err => console.log(err))

        }
        else if (answers.role === 'Intern') {
            inquirer
            .prompt ([
                {
                    type: 'input',
                    message: "What is the Intern's school name?",
                    name: 'school'
                }
            ])
            .then((ans) => {
                const newIntern = new Intern(answers.name, answers.id, answers.email, answers.role, ans.school);
                internArray.push(newIntern);

                addMore();
            })
            .catch(err => console.log(err))

        }
        else {
            console.log("You're team has been created");
            generateHTML();
        }
    })
    .catch(err => console.log(err))
}

function addMore() {
    inquirer
    .prompt ([
        {
            type: 'confirm',
            message: 'Would you like to add another team member?',
            name: 'addMore'
        }
    ])
    .then((ans) => {
        if(ans.addMore === true) {
            questions();
        }
        else {
         console.log("You're team has been created");
            generateHTML();
        }  
        })
        .catch(err => console.log(err))
    
};


function generateHTML() {
 
fs.writeFile('index.html', GenerateTeam(), err => {
    err ? console.log(err) : console.log("we did it");
}) 
}

function init() {
    questions();
}

init();


