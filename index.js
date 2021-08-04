const cTable = require('console.table');

const initApp = () =>{
    return inquirer.prompt ([
        {
        type: 'list',
        name: 'start',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'View All Employees by department', 'Add Employee', 'Remove Employee', 'Update Employee role', 'Update Employee Manager']
        }
    ]).then(data => {
        if(data.start === 'View All Employees'){
            return console.table([
                
            ]) ;
        } else {
             let pageHTML =  generatePage(employees);
             writeFile(pageHTML);
             copyFile();
        }
    })
}