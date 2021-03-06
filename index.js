// All of the required packages and classes for the app
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// This is the array that all team members will be pushed to once added
let team = [];

// This is the beginning of the html file as a string to be used later to write the file
const htmlBeginning = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <title>Team Profile</title>
</head>

<body>
    <nav class="navbar navbar-dark bg-primary justify-content-center">
        <h1>My Team</h1>
    </nav>

    <div class="row justify-content-around">
`;

// These are the closing tags for the html file
const htmlEnding = `</div>
</body>

</html>`;

// This method adds a manager class object to the team array
const addManager = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the manager's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the manager's id number?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the manager's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "officeNumber"
        },
    ]).then(({ name, id, email, officeNumber }) => {
        const newManager = new Manager(name, id, email, officeNumber);

        team.push(newManager);
        console.log("Successfully added Manager!");
        start();
    });
}

// This method adds an engineer class object to the team array
const addEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the engineer's id number?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the engineer's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the engineer's GitHub username?",
            name: "github"
        },
    ]).then(({ name, id, email, github }) => {
        const newEngineer = new Engineer(name, id, email, github);

        team.push(newEngineer);
        console.log("Successfully added Engineer!");
        start();
    });
}

// This method adds an intern class object to the team array
const addIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the intern's id number?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the intern's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What school does the intern attend?",
            name: "school"
        },
    ]).then(({ name, id, email, school }) => {
        const newIntern = new Intern(name, id, email, school);

        team.push(newIntern);
        console.log("Successfully added Intern!");

        start();
    });
}

// This method creates the html content to be written as well as writes it to an html file named index.html
const renderHTML = () => {
    let htmlContent = "";
    htmlContent += htmlBeginning;
    team.forEach(member => {
        if (member.getRole() == "Manager") {
            htmlContent += 
        `       <div class="card col-2.5">
            <h4 class="card-header">${member.getName()} - ${member.getRole()}</h4>
            <div class="card-body">
                <h5>ID: ${member.getId()}</h5>
                <h5>Email: <a href="mailto:${member.getEmail()}">
                        ${member.getEmail()}
                    </a></h5>
                <h5>Office Number: ${member.getOffice()}</h5>
            </div>
        </div>
        `;
        } else if (member.getRole() == "Engineer") {
            htmlContent += 
        `       <div class="card col-2.5">
            <h4 class="card-header">${member.getName()} - ${member.getRole()}</h4>
            <div class="card-body">
                <h5>ID: ${member.getId()}</h5>
                <h5>Email: <a href="mailto:${member.getEmail()}">
                        ${member.getEmail()}
                    </a></h5>
                <h5>GitHub: <a href="https://github.com/${member.getGithub()}" target="_blank">
                        ${member.getGithub()}
                    </a></h5>
            </div>
        </div>
        `;
        } else if (member.getRole() == "Intern") {
            htmlContent += 
        `       <div class="card col-2.5">
            <h4 class="card-header">${member.getName()} - ${member.getRole()}</h4>
            <div class="card-body">
                <h5>ID: ${member.getId()}</h5>
                <h5>Email: <a href="mailto:${member.getEmail()}">
                        ${member.getEmail()}
                    </a></h5>
                <h5>School: ${member.getSchool()}</h5>
            </div>
        </div>
        `;
        }
    });

    htmlContent += htmlEnding;
    fs.writeFile("index.html", htmlContent, (err) => {
        if (err) {
            console.log(err);
        }
    });
}


// This method is the prompt for the user to either add more members to the team or finish creating the team and make the html file
const start = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "Choose an option:",
            choices: ["Add intern", "Add engineer", "Finish building team"],
            name: "choice"
        }
    ]).then(resp => {
        switch (resp.choice) {
            case "Add intern":
                addIntern();
                break;

            case "Add engineer":
                addEngineer();
                break;

            case "Finish building team":
                renderHTML();   
                console.log("Team successfully built! Please check HTML file for generated team webpage.")
                break;
        }
    })
}

// This is the initial call to start the app upon running node index.js. It starts by prompting the user to give info on the manager
addManager();