const mysql = require('mysql2');

// create the connection to database
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password:'',
  database: 'table_mahasiswa'
});

module.exports = db.promise();