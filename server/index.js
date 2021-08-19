const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employees'
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}));

app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * FROM employee_details";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
})

app.post('/api/insert', (req, res) => {
    const Name = req.body.Name
    const Department = req.body.Department

    const sqlInsert = "INSERT INTO employee_details (Name, Department) VALUES(?,?);";
    db.query(sqlInsert, [Name, Department], (err, result) => {
        console.log(result);
    });
})

app.listen(3001, () => {
    console.log("Running on port 3001");
})