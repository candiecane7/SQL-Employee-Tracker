const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection(
    {
        host: 'localhost',
        //your MYSQL username,
        user: process.env.USER,
        //Your MYSQL password,
        password: process.env.PASS,
        database: 'election'
    }
);

module.exports = db;