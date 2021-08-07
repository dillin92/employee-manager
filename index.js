const cTable = require('console.table');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const Employee = require('./models/Employee');

 require('dotenv').config();

const db = mysql.createConnection( 
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'Jah232019!',
        database: 'employee_management_system'
      },

      console.log('Connected to the database.')
);




function initApp() {

    db.connect((err) => {
        if(err) {
            console.log(err)
        }
    });

        return inquirer.prompt ([
        {
        type: 'list',
        name: 'start',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'View All Employees by department', 'Add Employee', 'Remove Employee', 'Update Employee role', 'Update Employee Manager']
        }
    
        ])
    .then(data => {
     let userSelection = data.start;
     console.log(userSelection);
       if(userSelection === 'View All Employees') {
           return viewAllEmployees();
       } if(userSelection === 'View All Employees by department'){
           return viewByDepartment();
       }
       if(userSelection === 'Add Employee'){
        return addEmployee();
    }
       else {
           console.log('oops');
       }
        
        
    });
};

function viewAllEmployees(){

    db.query('SELECT * FROM employees;', (err, employees) => {
        console.table(employees);
        initApp();
    });

    

};

function viewByDepartment() {

    db.query('SELECT employees.first_name, employees.last_name, role.title FROM employees LEFT JOIN role ON employees.role_id = role.id;', (err, departments) => {
        console.table(departments);
        initApp();
    })
};

function addEmployee() {

    return inquirer.prompt([

        {
            type: 'input',
            name: 'first_name',
            message: 'What is the employees first name?',
            validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } }
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'What is the team members last name?',
            validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } }
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'What is the employees role id? (1-Owner 2-Manager 3-Engineers 4-Intern)',
            validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } }
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'What is the employees managers id?',
            validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } }
        }

    ]).then(({ first_name, last_name, role_id, manager_id }) => {

        this.employee = new Employee(first_name, last_name, role_id, manager_id);
        console.log(this.employee);


        db.('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (' + this.employee.first_name + ',' + this.employee.last_name + ',' + this.employee.role_id + ',' + this.employee.manager_id + ')', (err,employees) => {
            console.table(employees);
            initApp();
        });
    });

}


initApp();