const express = require("express");
const { conn } = require("./config/db");

const app = express();

app.set("view engine", "ejs");

const PORT = 3333;

conn.connect(function (err) {
  if (err) {
    console.log("!!! Cannot connect !!! Error:");
    throw err;
  } else {
    console.log("Database connection established.");
    conn.query(`INSERT into people(name) values ('Ilgsson')`);
  }
});

app.get("/", async (req, res) => {
  conn.query("SELECT * FROM people", function (err, result, fields) {
    if (err) throw err;
    const people = result.map((r) => {
      return {
        id: r.id,
        name: r.name,
      };
    });
    return res.render("index", { people });
  });
});

app.listen(PORT, () => console.log(`Server running!`));
