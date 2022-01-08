const express = require('express');
// const mysql = require('mysql');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const { Connection, Request } = require("tedious");
const { nextTick } = require('process');
const { status } = require('express/lib/response');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    // res.sendFile(path.join(__dirname, 'index.html'));
});

// const db = mysql.createConnection({
//     user: "itcs212",
//     password: "6288136",
//     host: "localhost",
//     database: "wearhouse"
// });

const config = {
    authentication: {
        options: {
            userName: "Don089", // update me
            password: "Worldwearz0" // update me
        },
        type: "default"
    },
    server: "world-wear-z.database.windows.net", // update me
    options: {
        database: "world-wear-z", //update me
        encrypt: true,
        rowCollectionOnRequestCompletion: true
    }
};


const connection = new Connection(config);



app.post('/register', (req, res) => {

    const fname = req.body.fname;
    const lname = req.body.lname;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const age = req.body.age;
    const address = req.body.address;

    db.query("INSERT INTO user (fname, lname, address, age, email, username, password) VALUES (?,?,?,?,?,?,?)", [fname, lname, address, age, email, username, password], (err, result) => {
        console.log(err);
        res.send(result);
    });
});

app.post('/login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT username, password FROM user WHERE username = ? AND password = ?", [username, password], (err, result) => {
        if (err) console.log(err);
        if (result.length > 0) {
            console.log(result);
            res.send(result);
        } else {
            console.log("Incorrect username or password");
            res.send({ message: "Incorrect username or password" });
        }
    });
});
var rowObject = {};
// search for products
app.get('/search', (req, res) => {

    // db.query("SELECT * FROM product", (err, result)=>{
    //     if(err) console.log(err);
    //     if(result.length > 0){
    //         console.log(result);
    //         res.send(result);
    //     }else{
    //         console.log("Cannot select from DB");
    //         res.send({message:"Cannot select from DB"});
    //     }
    // });

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryDatabase();
        }
    });

    connection.connect();

    

    function queryDatabase() {
        console.log("Reading rows from the Table...");

        // Read all rows from table
        const request = new Request(
            `SELECT * FROM product`,
            (err, rowCount) => {
                if (err) {
                    console.error(err.message);
                } else {
                    console.log(`${rowCount} row(s) returned`);
                }
            }
        );
        
        
            request.on("row", columns => {
            
                columns.forEach(function (column) {
                    rowObject[column.metadata.colName] = column.value;
                });
                // jsonArray.push(rowObject);
                console.log(rowObject);
                // res.send(rowObject);
            });
        
        connection.execSql(request);
    }
});

// Update user
app.put('/user', function (req, res) {
    let user_id = req.body.userinfo.id;
    let user = req.body.user;

    if (!user_id || !user) {
        return res.status(400).send({ error: user, message: 'Please provide user information' });
    }
    db.query("UPDATE user SET ? WHERE id = ?", [user, user_id], function (error, results) {
        if (error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: 'User has been updated successfully.' });
    });
});

// Delete User
app.delete('/user/:id', function (req, res) {
    let id = req.params.id;

    db.query('DELETE FROM user WHERE id = ?', id, function (error, results) {
        if (error) console.log(error);
        return res.send({ error: false, data: results.affectedRows, message: 'User has been deleted successfully.' });
    });
});

// View all users
app.get('/user', function (req, res) {

    db.query('SELECT * FROM user', function (err, result) {
        if (err) console.log(err);
        if (result.length > 0) {
            console.log(result);
            res.send(result);
        } else {
            console.log("Cannot select from DB");
            res.send({ message: "Cannot select from DB" });
        }
    });
});

app.listen(3030, () => {
    console.log("Server is running on port 3030");
});