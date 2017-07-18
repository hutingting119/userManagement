const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = new express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const insert = require("./mysql/insert");
const showall=require('./mysql/showall');

app.use(express.static('public'));

app.use("/", insert);
app.use('/',showall);

var server = app.listen(3000, () => {
    console.log('listening at port %s', server.address().port);
});

module.exports = server;