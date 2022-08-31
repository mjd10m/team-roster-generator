const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')
const Manager = require('../lib/Manager')
const inquirer = require('inquirer')
const createHTML = require('../src/html-markdown')
const fs = require('fs')
const { rejects } = require('assert')

const teamArray = []

const newTeamMember = () => {
    return inquirer 
        .prompt({
            type: 'list',
            message: "Select a team member you would like to add, if you are finished select 'Finish Team'",
            name: 'action',
            choices: ['Engineer', 'Intern', 'Finish Team']
        })
        .then(({ action }) => {
            if(action === 'Engineer') {
                return inquirer 
                    .prompt([{
                        type:'text',
                        name: 'name',
                        message: 'Enter your engineers name'
                    },
                    {
                        type:'text',
                        name: 'id',
                        message: 'Enter your engineers employee ID'
                    },
                    {
                        type:'text',
                        name: 'email',
                        message: 'Enter your engineers employee email address'
                    },
                    {
                        type:'text',
                        name: 'github',
                        message: 'Enter your engineers GitHub username'
                    }])
                    .then(engineerData => {
                        const {name, id, email, github} = engineerData
                        const engineer = new Engineer(name, id, email, github)
                        teamArray.push(engineer)
                        return newTeamMember()
                    })

                
            } else if (action === 'Intern'){
                return inquirer 
                    .prompt([{
                        type:'text',
                        name: 'name',
                        message: 'Enter your interns name'
                    },
                    {
                        type:'text',
                        name: 'id',
                        message: 'Enter your interns employee ID'
                    },
                    {
                        type:'text',
                        name: 'email',
                        message: 'Enter your interns employee email address'
                    },
                    {
                        type:'text',
                        name: 'school',
                        message: 'Enter your interns current school'
                    }])
                    .then(internData => {
                        const {name, id, email, school} = internData
                        const intern = new Intern(name, id, email, school)
                        teamArray.push(intern)
                        return newTeamMember()
                    })
            } else {
                console.log(teamArray)
                return teamArray
            }
        })
}

const managerPrompt = () => {
    return inquirer.prompt([{
            type:'text',
            name: 'name',
            message: 'Enter your name'
        },
        {
            type:'text',
            name: 'id',
            message: 'Enter your employee ID'
        },
        {
            type:'text',
            name: 'email',
            message: 'Enter your employee email address'
        },
        {
            type:'text',
            name: 'officeNumber',
            message: 'Enter your office number'
        }])
        .then(managerData => {
            const {name, id, email, officeNumber} = managerData
            const manager = new Manager(name, id, email, officeNumber)
            teamArray.push(manager)
        })
}

function writeToFile(fileName, htmlMarkdown) {
    return new Promise((resolve,reject) => {
        fs.writeFile(fileName, htmlMarkdown, err => {
            if(err) {
                reject(err)
                return;
            }
            resolve({
                ok: true,
                message: 'README Created'
            });
        });
    });
} 





function runApp() {
    managerPrompt()
    .then(newTeamMember)
    .then(teamArray => createHTML(teamArray))
    .then(htmlMarkdown => writeToFile('./dist/index.html',htmlMarkdown))
    

}



module.exports = runApp
