const generateTeam = (employeeArray) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    <div>sheesh billy bob</div>
        
    </body>
    </html>`
}

module.exports = generateTeam;


const html = [];

html.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManager(manager))
);
html.push(team
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => generateEngineer(engineer))
    .join("")
);
html.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => generateIntern(intern))
    .join("")
);

return html.join("");

