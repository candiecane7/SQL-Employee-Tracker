const db = require('../db/connection');
const inquirer = require("inquirer");

const viewDepts = function () {
    let table = "departments";
    db.query(
        `SELECT * FROM ${table};`,
        (err, res) => {
            if (err) throw err;
            console.table(res);
        })
};

const viewRoles = function () {
    db.query(
        `SELECT roles.*, departments.name AS department_name FROM roles LEFT JOIN departments ON roles.department_id = departments.id;`, (err, res) => {
            if (err) throw err;
            console.table(res);
        }
    )
};

const viewEmployees = function () {
    db.query(
        `SELECT employees.*, roles.title AS role_title, departments.name AS department_name, roles.salary AS salary, manager.first_name AS manager_name
        FROM employees
        JOIN employees manager ON employees.manager_id = manager.id 
        LEFT JOIN roles ON employees.role_id = roles.id 
        LEFT JOIN departments ON roles.department_id = departments.id;`, (err, res) => {
            if (err) throw err;
            console.table(res);
        }
    )
};

const addDept = function () {
    inquirer
        .prompt({
            type: 'input',
            name: 'deptName',
            message: "Type the name of the department you'd like to add"
        })
        .then(answer => {
            let deparments = "departments";
            let deptName = answer.deptName;
            db.query(
                `INSERT INTO ${deparments} (name)
     VALUES ('${deptName}');`, (err, res) => {
                if (err) throw err;
                console.log(`Added ${deptName} to the database`);
            }
            )
        })
};

async function addRole(req, res) {
    let queryString = `SELECT * FROM departments`;
    let deptChoices = await db.query(queryString).catch(err => res.status(500).json(err));

    inquirer
        .prompt([
            {
                type: "input",
                name: "addRole",
                message: "What is the name of the Role?"
            },
            {
                type: "input",
                name: "addSalary",
                message: "What is the salary for this Role?"
            },
            {
                type: 'list',
                name: 'addDeptId',
                message: "Which department is the Role part of?",
                choices: deptChoices
            }])
        .then((answers) => {
            // console.log(answers);
            let department = answers.addDeptId;
            let deptID = deptChoices.filter(dept => dept.name == department)[0].id;
            let role = answers.addRole;
            let salary = answers.addSalary;

            db.query(`INSERT INTO roles (title, salary, department_id)
         VALUES ('${role}', '${salary}', ${deptID});`, (err, res) => {
                if (err)
                    throw err;
                console.log(`Added ${role} to the database`)
            })
        })
};

async function addEmployee(req, res) {
    let queryString = `SELECT * FROM roles`;
    let queryString2 = `SELECT * FROM employees WHERE id IN (1,2) `;
    let roles = await db.query(queryString).catch(err => res.status(500).json(err));
    let managers = await db.query(queryString2).catch(err => res.status(500).json(err));
    let roleChoices = roles.map((role) => ({ id: role.id, name: role.title }));
    let managerChoices = managers.map((manager) => ({ id: manager.id, name: manager.first_name + ' ' + manager.last_name }));

    inquirer
        .prompt([{
            type: "input",
            name: "firstName",
            message: "What is their first name?"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is their last name?"
        },
        {
            type: "list",
            name: 'addRole',
            message: "What is the employee's role?",
            choices: roleChoices
        },
        {
            type: "list",
            name: 'addManager',
            message: "Who is the employee's manager?",
            choices: managerChoices
        }
        ])
        .then(answers => {
            let newRole = answers.addRole;
            let roleId = roleChoices.filter(roles => roles.name == newRole)[0].id;
            let newManager = answers.addManager;
            let managerID = managerChoices.filter(mans => mans.name == newManager)[0].id;

            db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES ('${answers.firstName}', '${answers.lastName}', ${roleId}, ${managerID});`, (err, res) => {
                if (err)
                    throw err;
                console.log(`Added ${answers.firstName} ${answers.lastName} to the database`);
            })
        });
};

async function updateEmployeeRole (req,res){
    let employees = await db.query(`SELECT * FROM employees`).catch(err => res.status(500).json(err));
    let roles = await db.query(`SELECT * FROM roles`).catch(err => res.status(500).json(err));
    let employeeChoices = employees.map(employee => ({id:employee.id, name:employee.first_name + ' ' + employee.last_name}));
    let roleChoices = roles.map(role => ({id:role.id, name:role.title }));

    inquirer
    .prompt([
        {
            type:'list',
            name:'employeeChoice',
            message: 'Please choose which employee to update',
            choices: employeeChoices
        },
        {
            type: 'list',
            name: 'roleChoice',
            message: 'Please choose new role for employee',
            choices: roleChoices
        }
    ])
    .then(answers => {
        let newRole = answers.roleChoice;
        let employee = answers.employeeChoice;
        let employeeId = employeeChoices.filter(emp => emp.name === employee)[0].id;
        let roleId = roleChoices.filter(role => role.name === newRole)[0].id;
        db.query(`UPDATE employees SET role_id = ${roleId} WHERE id = ${employeeId};`, (err, res)=>{
            if(err) throw err;
            console.log(`Updated role to ${newRole} for ${employee}`);
        })
    });
};


module.exports = {
    viewDepts,
    viewRoles,
    viewEmployees,
    addDept,
    addRole,
    addEmployee,
    updateEmployeeRole
};