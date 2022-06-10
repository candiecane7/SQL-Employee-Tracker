# SQL-Employee-Tracker

## Purpose
To create a node.js app that can view and manage the departments, roles and employees of a company.

## Installation
git clone code from repo and clone into whichever folder you'd like. Make sure to create a .env file (and add .env to your .gitignore file) and add your mySQL credentials. Make sure to follow wording in connection.js.

## Usage
Once your code is cloned, open up a terminal and write - npm install - to install needed dependencies.
Open your mySQL shell and write - source db/db.sql; -
Then write - source db/schema.sql; -
Lastly, write - source db/seeds.sql; -

Once this is done, quit the mySQL shell and then write node index to start the application. Follow the prompts and enjoy :)

*Please feel free to change the database name, the tables and the seeds as needed. Just make sure the database name is also changed in the connection.js file.

## Shout Outs
- https://tableplus.com/blog/2018/08/mysql-how-to-temporarily-disable-foreign-key-constraints.html

- https://medium.com/fullstackwebdev/a-guide-to-mysql-with-node-js-fc4f6abce33b


## User Story
- AS A business owner
- I WANT to be able to view and manage the departments, roles, and employees in my company
- SO THAT I can organize and plan my business

## Acceptance Criteria
- GIVEN a command-line application that accepts user input
- WHEN I start the application
- THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
- WHEN I choose to view all departments
- THEN I am presented with a formatted table showing department names and department ids
- WHEN I choose to view all roles
- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
- WHEN I choose to view all employees
- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
- WHEN I choose to add a department
- THEN I am prompted to enter the name of the department and that department is added to the database
- WHEN I choose to add a role
- THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
- WHEN I choose to add an employee
- THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
- WHEN I choose to update an employee role
- THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## Built With
- Javascript
- Node.js
- MySQL2
- Inquirer
- Dotenv

## Video Walkthrough

## Questions
