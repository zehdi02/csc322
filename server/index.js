const express = require("express");
const mysql = requrie("mysql");

const app= express();

app.use(express.json());

/*  The code below connects to a local mySQL db*/
const db =mysql_createConnection({
    user: "root",
    host: "localhost",
    password:"password",
    database:"DB",
});