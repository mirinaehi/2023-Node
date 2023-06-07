const mysql = require('mysql2');

// mysql 시스템 정보(절대로 공개하면 안됨)
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'manager',
  database: 'lck',
});

pool.query("SELECT * FROM player", (err, results) => {
  for(const r of results) {
    console.log(r);
  }
});