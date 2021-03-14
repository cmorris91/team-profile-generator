const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("../lib/employee");
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

const managerArray= [];
const engineerArray = [];
const internArray = [];

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
         getTeam();
            generateHTML();
        }  
        })
        .catch(err => console.log(err))
    
};

function getManager(answers) {
    getName();
    getId();
    getEmail();
    getRole();
    getOfficeNumber();
 const managerAnswers =
 Manager.forEach(
     `<div class="employee col-12 col-lg-4">
        <div class="card-body">
         <h3 class="name">${answers.name}</h3>
         <h4 class="role">${ansers.role}</h4>
     </div>
     <ul class="info" style="list-style-type: none;">
     <li><a href="mailto: ${answers.email}"><i class="fas fa-envelope">  ${answers.email}</i></a></li>
         <li>${answers.id}</li>
         <li>${answers.office}</li>
     </ul>
 </div>`
 )
 
};
function getIntern() {
    getName();
    getId();
    getEmail();
    getRole();
    getSchool();
const internAnswers =
 Intern.forEach(
     `<div class="employee col-12 col-lg-4">
        <div class="card-body">
         <h3 class="name">${answers.name}</h3>
         <h4 class="role">${ansers.role}</h4>
     </div>
     <ul class="info" style="list-style-type: none;">
     <li><a href="mailto: ${answers.email}"><i class="fas fa-envelope">  ${answers.email}</i></a></li>
         <li>ID# ${answers.id}</li>
         <li>School: ${answers.school}</li>
     </ul>
 </div>`
 )
}
function getEngineer() {
    getName();
    getId();
    getEmail();
    getRole();
    getGithub();

 const engineerAnswers =
 Engineer.forEach(
        `<div class="employee col-12 col-lg-4">
           <div class="card-body">
            <h3 class="name">${answers.name}</h3>
            <h4 class="role">${ansers.role}</h4>
        </div>
        <ul class="info" style="list-style-type: none;">
            <li><a href="mailto: ${answers.email}"><i class="fas fa-envelope">  ${answers.email}</i></a></li>
            <li>ID# ${answers.id}</li>
            <li><a href ="https://github.com/${answers.github}">Github: github.com/${answers.github}</a></li>
        </ul>
    </div>`
    )
}
// function getTeam() {
//     team.push(managerArray, engineerArray, internArray);
//     console.log(team);
// }

function generateHTML() {
    getManager();
    getEngineer();
    getIntern();

    const htmlPageContent = 
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <script src="https://kit.fontawesome.com/39d1eba46a.js" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="./CSS/style.css">
</head>
<header>
    <div class="jumbotron jumbotron-fluid">
        <h1 class="title display-4">My Team</h1>
    </div>
</header>
<body>
    <main class="container">
        <div class="team row">`
           

       ` </div>
    </main>
</body>
</html>`

fs.writeFile('index.html', htmlPageContent, err => {
    err ? console.log(err) : console.log("we did it");
}) 

}

function init() {
    questions();
}

init();