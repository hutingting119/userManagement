var mysql = require('mysql');

const express = require('express');

const router = express.Router();

router.post('/insert', (req, res)=> {

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'userManger',
        port: 3306
    });
    connection.connect();
    var arr = Object.keys(req.body).map(function (key) { return req.body[key]; });
    connection.query('INSERT INTO usesrs(name, age, sex,phone,email,remark) VALUES(?,?,?,?,?,?)',arr, function (err, result) {
            if (err) {
                console.log('err');
                return;
            }
        });
});

module.exports = router;
