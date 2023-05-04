const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

/*  The code below connects to a local mySQL db*/
const db = mysql.createConnection({
    user: "testuser",
    host: "csc332-db.ccnbxjalqhpm.us-east-2.rds.amazonaws.com",
    password:"123",
    database:"CSC332",
});

/* Test DB connection */
db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
    console.log('Connected to MySQL database!');
  });

app.post("/sign-up", (req, res) => {


    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const email = req.body.email
    const password = req.body.password
    const phone = req.body.phone


    db.query("INSERT INTO regUser (FirstName, LastName, Email, Password, Phone) VALUES (?,?,?,?,?)", 
    [firstname, lastname, email, password, phone], 
    (err,result) => {console.log(err);
    });
});

app.listen(3001, () => {
    console.log("running server");
});