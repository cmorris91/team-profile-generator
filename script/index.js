const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./employee");
const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');



const team = [];

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
            type: 'input',
            message: "What is the employee's role?",
            chioces: ['Manager','Engineer', 'Intern'],
            name: 'role'
        },
    ])
    .then(answers => {

        if(answers.role === 'Manager') {
            inquirer
            .prompt ([
                {
                    type: 'input',
                    message: "What is the Manager's office number?",
                    name: 'office'
                }
            ])
            .then(ans => {

                const newManager = new Manager(answers.name, answers.id, answers.email, answers.role, answers.office);
                team.push(newManager);

                addMore();
            })

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
            .then(ans => {

                const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.role, answers.github);
                team.push(newEngineer);

                addMore();
            })

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
            .then(ans => {

                const newIntern = new Intern(answers.name, answers.id, answers.email, answers.role, answers.school);
                team.push(newIntern);

                addMore();
            })

        }
        else {
            console.log("You're team has been created");
            generateHTML();
        }
    })
}


const generateHTML = () => {

}

const addMore = () => {
    inquirer
    .prompt ([
        {
            type: 'input',
            message: 'Would you like to add another team member?',
            name: 'addMore'
        }
        .then(ans => {
            if(ans.addMore === true) {
                questions();
            }
            else{
            console.log("You're team has been created");
            generateHTML();
        } 
            
        })
    ])
    
}

