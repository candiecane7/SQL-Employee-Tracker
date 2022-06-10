//UPDATE MANAGER ID - not working
//Don't forget to make sure you can go back to initial question after choosing what you want to do... 
const db = require("./db/connection");
const inquirer = require("inquirer");
const { viewDepts, viewRoles, viewEmployees, addDept, addRole, addEmployee, updateEmployeeRole } = require('./src/questions');
// let deptChoices = require('');

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    startQs();
})

//inquirer prompts question: What would you like to do?
//answers: view all deparments, view all roles, view all employees, add a department, add a role, add an employee, update employee role
const startQs = function () {
    inquirer
        .prompt({
            type: "list",
            name: "options",
            message: "What would you like to do?",
            choices: ["View all Departments", "View all Roles", "View all Employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
        }).then(answer => {
            if (answer.options === "View all Departments") {
                viewDepts();
                // startQs();
            }
            if (answer.options === "View all Roles") {
                viewRoles();
                // startQs();
            }
            if (answer.options === "View all Employees") {
                viewEmployees();
                // startQs();
            }
            if (answer.options === "Add a department") {
               addDept();
            //    startQs();
            }
            if (answer.options === "Add a role") {
                addRole();
                // startQs();
            }
            if(answer.options === "Add an employee"){
                addEmployee();
            }
            if(answer.options === "Update an employee role"){
                updateEmployeeRole();
            }
           
        });
};
       











// .prompt({
//     type: "list",
//     name: "updateEmployee",
//     message: "Which employee would you like to update?",
//     choices: employeeChoices
// },
// {
//     type: "list",
//     name: "roles",
//     message: "Which role would you like to assign?",
//     choices: roleChoices
// }).then(answers =>{
//     console.log(`${answers.updateEmployee}'s role has been updated to ${answers.roles} in the database`)
// })