const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let team = [];

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
        start();
    });
}

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

        start();
    });
}

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

        start();
    });
}

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
                console.log("Team successfully built! Please check HTML file for generated team webpage.")
                break;
        }
    })
}