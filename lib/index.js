const inquirer = require('inquirer');
const fs = require('fs');
const parse = require('node-html-parser').parse;

const generateHTML = require("./generateteam");
const Employee = require("../lib/employee.js");
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');



const engineerArray = [];
const internArray = [];
const managerArray = [];

//prompts first questions about employee and checks to make sure values are entered
const questions = () => {

    inquirer
    .prompt ([
        {
            type: 'input',
            message: "What is the employee's name?",
            name: 'name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('An employee name must be entered.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is the employee's email?",
            name: 'email',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('An employee email must be entered.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What is the employee's ID number?",
            name: 'id',
            validate: idInput => {
                if (idInput.isNumeric()) {
                    return true;
                } else {
                    console.log('An employee ID number must be entered.')
                    return false;
                }
            }
        },
        {
            type: 'list',
            message: "What is the employee's role?",
            choices: ['Manager', 'Intern', 'Engineer'],
            name: 'role',
            validate: roleInput => {
                if (roleInput) {
                    return true;
                } else {
                    console.log('An employee role must be entered.')
                    return false;
                }
            }
          },
    ])
    //with response prompts user for info on individual employee
    .then((answers) => {
        console.log(answers);
        if(answers.role === 'Manager') {
            inquirer
            .prompt ([
                {
                    type: 'input',
                    message: "What is the Manager's office number?",
                    name: 'office',
                    validate: officeInput => {
                        if (officeInput.isNumeric())  {
                            return true;
                        } else {
                            console.log('Number must be entered for Manager office')
                            return false;
                        }
                    }
                }
            ])
            //if theres a manger the info user typed in is pushed to manager array
            .then((ans) => {
                const newManager = new Manager(answers.name, answers.id, answers.email, answers.role, ans.office);

                managerArray.push(newManager);
                console.log(newManager.getRole());

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
                    name: 'github',
                    validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log('An engineer github must be entered.')
                            return false;
                        }
                    }
                }
            ])
            //if theres an engineer the info user typed in is pushed to engineer array
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
                    name: 'school',
                    validate: schoolInput => {
                        if (schoolInput) {
                            return true;
                        } else {
                            console.log('An Intern school must be entered.')
                            return false;
                        }
                    }
                }
            ])
            //if theres an intern the info user typed in is pushed to intern array
            .then((ans) => {
                const newIntern = new Intern(answers.name, answers.id, answers.email, answers.role, ans.school);
                internArray.push(newIntern);

                addMore();
            })
            .catch(err => console.log(err))

        }
        else {
            //if they are done with team html is rendered
            console.log("You're team has been created");
          renderHtml();
        }
    })
    .catch(err => console.log(err))
}

//prompts user to see if they want to add any more employees
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
         renderHtml();
        }  
        })
        .catch(err => console.log(err))

};

//renders html to existing html starter code
function renderHtml() {
    fs.readFile('index.html', 'utf8', (err, html) => {
        if (err) {
            throw err;
        }

        const root = parse(html);

        const body = root.querySelector('#team');

        let allData = "";
        if (managerArray.length === 0 && internArray.length === 0) {
            allData = allData + generateHTML.getEngineer(engineerArray);
    
        } else if (internArray.length === 0 && engineerArray.length === 0) {
            allData = allData + generateHTML.getManager(managerArray);
    
        } else if ( engineerArray.length === 0 && managerArray.length === 0) {
            allData = allData + generateHTML.getIntern(internArray);
        } else {
            allData = allData + generateHTML.getManager(managerArray);
            allData = allData + generateHTML.getIntern(internArray);
            allData = allData + generateHTML.getEngineer(engineerArray);
        }
        
        body.set_content(allData)

        fs.writeFile('index.html', root.toString(), err => {
            err ? console.log(err) : console.log('!')
        })
    });
}

//begins app
function init() {
    questions();
}

init();






