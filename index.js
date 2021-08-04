const cTable = require('console.table');
const createConnection = require('mysql2');
const db = require('./config/connection');
const inquirer = require('inquirer');


function initApp() {
        return inquirer.prompt ([
        {
        type: 'list',
        name: 'start',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'View All Employees by department', 'Add Employee', 'Remove Employee', 'Update Employee role', 'Update Employee Manager']
        }
    
        ])
    .then(data => {
       if(data === 'View All Employees') {
           return viewAllEmployees();
       }
        
        
    });
};

function viewAllEmployees(){
    let employees = db.employees;
    const employeeTable = cTable.getTable(employees);
    console.log(employeeTable);
}


initApp();