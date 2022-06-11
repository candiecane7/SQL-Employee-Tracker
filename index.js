
const db = require("./db/connection");
const inquirer = require("inquirer");
const { viewDepts, viewRoles, viewEmployees, addDept, addRole, addEmployee, updateEmployeeRole } = require('./src/questions');


db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
});

let timeout;
function timer(){
    timeout = setTimeout(startQs, 10000);
}

const startQs = function () {
    inquirer
        .prompt({
            type: "list",
            name: "options",
            message: "What would you like to do?",
            choices: ["View all Departments", "View all Roles", "View all Employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Exit"]
        }).then(answer => {
            if (answer.options === "View all Departments") {
                viewDepts();
                timer();
            }
            if (answer.options === "View all Roles") {
                viewRoles();
                timer();
            }
            if (answer.options === "View all Employees") {
                viewEmployees();
                timer();
            }
            if (answer.options === "Add a department") {
               addDept();
                timer();
            }
            if (answer.options === "Add a role") {
                addRole();
                timer();
            }
            if(answer.options === "Add an employee"){
                addEmployee();
                timer();
            }
            if(answer.options === "Update an employee role"){
                updateEmployeeRole();
                timer();
            }
            if(answer.options === "Exit"){
                process.exit();
            }
           
        });
};

startQs();