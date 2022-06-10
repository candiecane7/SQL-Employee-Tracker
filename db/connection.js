const mysql = require('mysql2');
require('dotenv').config();
const util = require("util"); 

const db = mysql.createConnection(
    {
        host: 'localhost',
        //your MYSQL username,
        user: process.env.USER,
        //Your MYSQL password,
        password: process.env.PASS,
        database: 'dental'
    }
);

db.query = util.promisify(db.query).bind(db);

module.exports = db;



