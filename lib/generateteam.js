// const Employee = require("../lib/employee");
// const Manager = require('../lib/manager');
// const Engineer = require('../lib/engineer');
// const Intern = require('../lib/intern');
// const managerArray = require('../lib/index');
// const engineerArray = require('../lib/index');
// const internArray = require('../lib/index');

// const team = [];

// const GenerateTeam = () => {
    
//     team.push(managerArray, engineerArray, internArray)
//     console.log(team);

    

//     `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Team Profile</title>
//     <script src="https://kit.fontawesome.com/39d1eba46a.js" crossorigin="anonymous"></script>
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
//     <link rel="stylesheet" href="./CSS/style.css">
// </head>
// <header>
//     <div class="jumbotron jumbotron-fluid">
//         <h1 class="title display-4">My Team</h1>
//     </div>
// </header>
// <body>
//     <main class="container">
//         <div class="team row"></div>`

//     Manager.forEach(
//         `<div class="employee col-12 col-lg-4">
//            <div class="card-body">
//             <h3 class="name">${Manager.getName()}</h3>
//             <h4 class="role">${Manager.getRole()}</h4>
//         </div>
//         <ul class="info" style="list-style-type: none;">
//         <li><a href="mailto: ${Manager.getEmail()}"><i class="fas fa-envelope">  ${Manager.getEmail()}</i></a></li>
//             <li>${Manager.getId()}</li>
//             <li>${Manager.getOfficeNumber()}</li>
//         </ul>
//     </div>`
//     );

//     Engineer.forEach(
//         `<div class="employee col-12 col-lg-4">
//            <div class="card-body">
//             <h3 class="name">${Engineer.getName()}</h3>
//             <h4 class="role">${Engineer.getRole()}</h4>
//         </div>
//         <ul class="info" style="list-style-type: none;">
//         <li><a href="mailto: ${Engineer.getEmail()}"><i class="fas fa-envelope">  ${Engineer.getEmail()}</i></a></li>
//             <li>${Engineer.getId()}</li>
//             <li><a href ="https://github.com/${Engineer.getGithub()}">Github: github.com/${Engineer.getGithub()}</a></li>
//         </ul>
//     </div>`
//     );

//     Intern.forEach(
//         `<div class="employee col-12 col-lg-4">
//            <div class="card-body">
//             <h3 class="name">${Intern.getName()}</h3>
//             <h4 class="role">${Intern.getRole()}</h4>
//         </div>
//         <ul class="info" style="list-style-type: none;">
//         <li><a href="mailto: ${Intern.getEmail()}"><i class="fas fa-envelope">  ${Intern.getEmail()}</i></a></li>
//             <li>${Intern.getId()}</li>
//             <li>${Intern.getSchool()}</li>
//         </ul>
//     </div>`
//     );

//     ` </div>
//     </main>
// </body>
// </html>`;
    
// }

// module.exports = GenerateTeam();