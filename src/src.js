const Manager = require("../lib/Manager")


function createManager(manager) {
    console.log(manager)
    return `
<div class="col-4 mt-5">
    <div class="card">
        <div class="card-header text-center bg-primary text-white fw-bold">
            <div class="fs-3">${manager.name}</div>
            <div class="fs-5"> Manager</div>
        </div>
        <ul class="list-group py-5 px-3">
          <li class="list-group-item">Employee ID: ${manager.id}</li>
          <li class="list-group-item">Employee Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
          <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
      </div>
</div>
`
}
function createEngineer(engineer) {
    return `
<div class="col-4 mt-5">
    <div class="card">
        <div class="card-header text-center bg-primary text-white fw-bold">
            <div class="fs-3">${engineer.name}</div>
            <div class="fs-5"> Engineer</div>
        </div>
        <ul class="list-group py-5 px-3">
            <li class="list-group-item">Employee ID: ${engineer.id}</li>
            <li class="list-group-item">Employee Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item">GitHub: <a href="github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
    `
}



function createHTML(data) {
console.log(data)
const employee = data[0]
const team = createManager(employee)
console.log(team)
return team
/*`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 bg-success bg-gradient text-white">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container-xxl">
        <div class="row justify-content-center flex-wrap">
            <div class="col-4 mt-5">
                <div class="card">
                    <div class="card-header text-center bg-primary text-white fw-bold">
                        <div class="fs-3">Michael</div>
                        <div class="fs-5"> Manager</div>
                    </div>
                    <ul class="list-group py-5 px-3">
                      <li class="list-group-item">Employee ID: 1</li>
                      <li class="list-group-item">Employee Email: <a href="mailto:michaelmanager@somecompany.com">michaelmanager@somecompany.com</a></li>
                      <li class="list-group-item">Office Number: 45</li>
                    </ul>
                  </div>
            </div>
            <div class="col-4 mt-5">
                <div class="card">
                    <div class="card-header text-center bg-primary text-white fw-bold">
                        <div class="fs-3">Jeff</div>
                        <div class="fs-5"> Engineer</div>
                    </div>
                    <ul class="list-group py-5 px-3">
                      <li class="list-group-item">Employee ID: 2</li>
                      <li class="list-group-item">Employee Email: <a href="mailto:jeffmanager@somecompany.com">jeffenigneer@somecompany.com</a></li>
                      <li class="list-group-item">GitHub: <a href="github" target="_blank">jeffGitHub</a></li>
                    </ul>
                  </div>
            </div>
            <div class="col-4 mt-5">
                <div class="card">
                    <div class="card-header text-center bg-primary text-white fw-bold">
                        <div class="fs-3">Jerry</div>
                        <div class="fs-5"> Student</div>
                    </div>
                    <ul class="list-group py-5 px-3">
                      <li class="list-group-item">Employee ID: 3</li>
                      <li class="list-group-item">Employee Email: <a href="mailto:jerrystudent@somecompany.com" >jerrystudent@somecompany.com</a></li>
                      <li class="list-group-item">School: Colorado State</li>
                    </ul>
                  </div>
            </div>
        </div>
    </div>
    

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
</body>
</html>`*/

}

module.exports = createHTML