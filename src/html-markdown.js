const Manager = require("../lib/Manager")

function capFirstLetter(string) {
    const str = string
    const str2 = str.charAt(0).toUpperCase() + str.slice(1)
    return str2
}

function getIcon(employee) {
    if (employee.getRole() === 'Manager') {
        return `<i class="fa-solid fa-mug-saucer"></i>`
    } else if (employee.getRole() === 'Engineer') {
        return `<i class="fa-solid fa-computer"></i>`
    } else if (employee.getRole() === 'Intern') {
        return `<i class="fa-solid fa-graduation-cap"></i>`
    }
}

function createEmployeeCard(employee) {
            return  `<div class="col-4 mt-5">
                <div class="card">
                    <div class="card-header text-center bg-primary text-white fw-bold">
                        <div class="fs-3">${capFirstLetter(employee.name)}</div>
                        <div class="fs-5">${getIcon(employee)} ${employee.getRole()}</div>
                    </div>
                    <ul class="list-group py-5 px-3">
                    <li class="list-group-item">Employee ID: ${employee.id}</li>
                    <li class="list-group-item">Employee Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">${addEmployeeSpecialDesc(employee)}</li>
                    </ul>
                </div>
            </div>
            `
}
function addEmployeeSpecialDesc(employee) {
    if (employee.getRole() === 'Manager') {
        return `Office Number: ${employee.officeNumber}`
    } else if (employee.getRole() === 'Engineer') {
        return `GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>`
    } else if (employee.getRole() === 'Intern') {
        return `School: ${employee.getSchool()}`
    }
}



function createHTML(teamArray) {
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/e352c0e474.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 bg-success bg-gradient text-white">
                <h1 class="text-center">${capFirstLetter(teamArray[0].name)}'s Team</h1>
            </div>
        </div>
    </div>
    <div class="container-xxl">
        <div class="row justify-content-center flex-wrap">
            ${teamArray.map(employee => {return `${createEmployeeCard(employee)}`}).join('').trim()}
        </div>
    </div>
    

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
</body>
</html>
`

}

module.exports = createHTML