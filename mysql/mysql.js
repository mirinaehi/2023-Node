const mysql = require('mysql2/promise');
const path = require('path');

require('dotenv').config({
  path: path.join(__dirname, '.env')
});

// mysql 시스템 정보(절대로 공개하면 안됨)
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DB,
});

// const insertData = {
//   name: 'bengi',
//   lane: 'jg',
//   team: 't1',
//   kills: 5,
//   deaths: 3,
//   assists: 8
// };

// pool.query("INSERT INTO player SET ?", insertData)
//   .then(()=>{
//     console.log('INSERT 성공')
//   })
//   .catch(err => {
//     console.error(err);
//   });

const updateData = {
  name: "sungwoong",
  kills: 15,
  deaths: 10
}

pool.query("UPDATE player SET ? WHERE name = ?", [updateData, "bengi"])
  .then(() => {
    console.log("UPDATE 성공");
  })
  .catch(err => {
    console.error(err);
  });

pool.query("SELECT * FROM player")
  .then(([results]) => {
    for(const r of results) {
      console.log(r);
    }
  })
  .catch(err => {
    console.error(err);
  });