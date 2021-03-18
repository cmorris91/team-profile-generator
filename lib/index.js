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
          renderHtml();
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
         renderHtml();
        }  
        })
        .catch(err => console.log(err))

};





// function generateHTML(data) {

// fs.writeFile('index.html', render(data), err => {
//     err ? console.log(err) : console.log("we did it");
// })
// }

// function renderManger() {

//     fs.appendFile('index.html', genManager, err => {
//             err ? console.log(err) : console.log(managerArray)
//     }) 
// }


// function renderEngineer() {

//     fs.appendFile('index.html', genEngineer, err => {
//         err ? console.log(err) : console.log(engineerArray)
//     }) 
// }



// function renderIntern() {

//     fs.appendFile('index.html', genIntern, err => {
//         err ? console.log(err) : console.log(internArray)
//     }) 
// }

function renderHtml() {
    fs.readFile('index.html', 'utf8', (err, html) => {
        if (err) {
            throw err;
        }

        const root = parse(html);

        const body = root.querySelector('#team');
        
        let allData = "";

        allData = allData + generateHTML.getManager(managerArray);
        allData = allData + generateHTML.getIntern(internArray);
        allData = allData + generateHTML.getEngineer(engineerArray);
        console.log(allData);
        console.log(body);
        body.set_content(allData)
        
       
        console.log(root.toString()); // This you can write back to file!
        fs.writeFile('index.html', root.toString(), err => {
            err ? console.log(err) : console.log('!')
        })
    });


}


function init() {
    questions();
}

init();


// exports.managerArray = managerArray;
// exports.engineerArray = engineerArray;
// exports.internArray = internArray;




