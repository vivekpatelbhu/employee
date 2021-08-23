var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var port = process.env.PORT || 8000;

//mongo connection

if (mongoose.connect('mongodb://localhost/emprecord'))
    console.log('HI..Mongodb is Connected:');
else
    console.log('error not connected mongoose');

// //require Routes index.js
var index = require('./routes/main.js')(app)

// server running on that port

app.listen(port, () => {
    console.log("Hi...server is connected Port at:", port);
});
