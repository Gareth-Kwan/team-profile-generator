const generateTeam = (team) => {
  // Generate HTML card for Manager
  const generateManager = (manager) => {
    return `

    <div class="card">
    <div class="title">Title: ${manager.getRole()}</div>
    <h2>${manager.getName()}</h2>
    <ul>
      <li>ID: ${manager.getId()}</li>
      <li>Email:<a href=mailto:${manager.getEmail()}>${manager.getEmail()}</a></li>
      <li>Office Number: ${manager.getOfficeNumber()}</li>
    </ul>
    </div>
`;
  };

  // Generate HTML card for Engineers
  const generateEngineer = (engineer) => {
    return `
    <div class="card">
    <div class="title">Title:${engineer.getRole()}</div>
     <h2>${engineer.getName()}</h2>
     <ul>
       <li>ID: ${engineer.getId()}</li>
       <li>Email:<a href=mailto:${engineer.getEmail()}>${engineer.getEmail()}</a></li>
       <li>Github:<a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
     </ul>
   </div>
   `;
  };

  // Generate HTML card for Intern
  const generateIntern = (intern) => {
    return `
    <div class="card">
    <div class="title">Title: ${intern.getRole()}</div>
    <h2>${intern.getName()}</h2>
    <ul>
      <li>ID: ${intern.getId()}</li>
      <li>Email:<a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
      <li>School: ${intern.getSchool()}</li>
    </ul>
    </div>
    `;
  };

  //Create a empty array for html to be filled with additional information
  const html = [];

  //Pushing the user input information to the array above and outputting html
  html.push(
    team.filter((employee) => employee.getRole() === "Manager").map((manager) => generateManager(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );
  return html.join("");
};

// Exports the skelton of the HTML and will be filled by the generate team function above
module.exports = (team) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team</title>
      <script src="https://kit.fontawesome.com/c502137733.js"></script>
      <link rel="stylesheet" href="style.css" />
    </head>
  
    <body>
      <body>
        <div class="banner">
          <h1>My Team</h1>
        </div>
        <div class="card-container">
        ${generateTeam(team)}
        </div>
      </body>
    </body>
  </html>
    `;
};
