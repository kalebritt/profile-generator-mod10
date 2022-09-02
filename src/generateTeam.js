const generateTeam = (employeeArray) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="style" href="./dist/style.css">
        <title>Profile Generator</title>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                    <h1 class="text-center text-white">Go Team!</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="row team-area col-12 d-flex justify-content-center">
    
    <div class="card employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">Name</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: </li>
                <li class="list-group-item">Email: <a href="mailto:">email</a></li>
                <li class="list-group-item">Office number: </li>
            </ul>
        </div>
    </div>
    
    <div class="card employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">Name</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: 2</li>
                <li class="list-group-item">Email: <a href="mailto:">email</a></li>
                <li class="list-group-item">GitHub: <a href="" target="_blank" rel="noopener noreferrer"></a></li>
            </ul>
        </div>
    </div>
    
    <div class="card employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">Name</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: 0</li>
                <li class="list-group-item">Email: <a href="mailto:">email</a></li>
                <li class="list-group-item">School: </li>
            </ul>
        </div>
    </div>
        
    
    </body>
    </html>`
}

module.exports = generateTeam;