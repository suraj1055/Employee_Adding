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
app.use(bodyParser.urlencoded({ extended: true }));

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

app.post('/api/register', (req, res) => {
    const Username = req.body.Username
    const Password = req.body.Password

    const sqlInsert = "INSERT INTO employee_register (username, password) VALUES(?,?);";
    db.query(sqlInsert, [Username, Password], (err, result) => {
        console.log("User Registered Successfully");
    });
})

app.post('/api/login', (req, res) => {
    const Username = req.body.Username
    const Password = req.body.Password

    const sqlSelect = "SELECT * FROM employee_register WHERE username = ? AND password = ?";
    db.query(sqlSelect, [Username, Password], (err, result) => {
        if (err) {
            res.send( {err: err} )
        }

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ message: "Wrong username/password combination"});
        }
    })
})

app.listen(3001, () => {
    console.log("Running on port 3001");
})