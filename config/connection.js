 const mysql = require('mysql2');

 require('dotenv').config();

const db = mysql.createConnection( 
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: process.env.DB_PW,
        database: process.env.DB_NAME
      },

      console.log('Connected to the election database.')
);

module.exports = db;