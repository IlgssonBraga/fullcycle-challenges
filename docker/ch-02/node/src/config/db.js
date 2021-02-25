const mysql = require("mysql");

var config = {
  host: "db",
  user: "root",
  password: "root",
  database: "challenge02",
  port: 3306,
  ssl: true,
};
const conn = new mysql.createConnection(config);

module.exports = { conn };
