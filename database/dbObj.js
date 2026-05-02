const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Sri@984937",
  database: "my_notes_db",
});

module.exports = { db };
