const cTable = require('console.table');
const { restoreDefaultPrompts } = require('inquirer');
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




async function initApp() {

    db.connect((err) => {
        if(err) {
            console.log(err)
        }
    });

        const data = await inquirer.prompt([
        {
            type: 'list',
            name: 'start',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'View All Employees by department','View All Roles','View All Departments','Add Employee','Remove Employee']
        }
    ]);
    let userSelection = data.start;
    if (userSelection === 'View All Employees') {
        return viewAllEmployees();
    }
    if (userSelection === 'View All Employees by department') {
        return viewByDepartment();
    }
    if (userSelection === 'View All Roles') {
        return viewAllRoles();
    }
    if (userSelection === 'View All Departments') {
        return viewAllDepartments();
    }
    if (userSelection === 'Add Employee') {
        return addEmployee();
    }
    if(userSelection === 'Remove Employee') {
        return deleteEmployee();
    }

    else {
        console.log('oops');
    }
};

function viewAllEmployees(){

    db.query('SELECT * FROM employees;', (err, employees) => {
        console.table(employees);
        initApp();
    });

    

};

function viewAllRoles(){

    db.query('SELECT * FROM role;', (err, roles) => {
        console.table(roles);
        initApp();
    });

    

};

function viewAllDepartments() {

    db.query('SELECT * FROM department;', (err, departments) => {
        console.table(departments);
        initApp();
    });
};

function viewByDepartment() {

    db.query('SELECT employees.first_name, employees.last_name, role.title FROM employees LEFT JOIN role ON employees.role_id = role.id;', (err, departments) => {
        console.table(departments);
        initApp();
    })
};

async function addEmployee () {

    db.query('SELECT * FROM role;', async (err, roles) => {

        let displayedRoles = roles.map((role) => {

            return {
                value: role.id,
                name: role.title
            } 

        });

        const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
            {
                type: 'input',
                name: 'first_name',
                message: 'What is the employees first name?',
                validate: (value_1) => { if (value_1) { return true; } else { return "Please enter a value to continue"; } }
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'What is the team members last name?',
                validate: (value_3) => { if (value_3) { return true; } else { return "Please enter a value to continue"; } }
            },
            {
                type: 'list',
                name: 'role_id',
                message: 'What is the employees role?',
                choices: displayedRoles
        
            },
            {
                type: 'input',
                name: 'manager_id',
                message: 'What is the employees managers id?',
                validate: (value_7) => { if (value_7) { return true; } else { return "Please enter a value to continue"; } }
            }
        ]);

        this.employee = new Employee(first_name, last_name, role_id, manager_id);
    ;
    
        db.query('INSERT INTO employees SET ?', this.employee, (err, employees) => {
            
            viewAllEmployees();
            initApp();
        });


        
    });


    

};

function deleteEmployee () {

    db.query('SELECT employees.id, employees.first_name, employees.last_name FROM employees', (err, employees) => {
    
         inquirer.prompt([
            {
                type: 'input',
                name: 'selected_employee',
                message: 'Which employee would you like to remove?(type the id of the employee)',
                choices: console.table(employees)
            }
    
            
        ]).then(id => {

            let employeeId = id.selected_employee;

            db.query('DELETE FROM employees WHERE employees.id=' + employeeId, async (err, employees) => {
                return viewAllEmployees();
            });
        }) ;
    });


       
};

    
    


 

  


initApp();